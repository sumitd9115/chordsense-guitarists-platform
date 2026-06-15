// All npm packages
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { promisify } = require("util");

// All Created Packages
const User = require("../models/userModel.js");
const catchAsync = require("../utils/catchAsync.js");
const AppError = require("../utils/appError.js");
const sendEmail = require("../utils/email.js");
const client = require("../config/redis.js");
const {
  otpTemplate,
  forgotPasswordTemplate,
} = require("../utils/emailTemplates");

// JWT Token Generation
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // COOKIE IMPLEMENTATION
  // Cookie is type of storage which browser uses to store sensitive data in secure form.
  // Browser uses cookie to send and receive sensitive data from server.
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }

  res.cookie("jwt", token, cookieOptions);

  // Removes the password from showing
  user.password = undefined;

  res.status(statusCode).json({
    success: true,
    token,
    message: "User created successfully!!",
    data: {
      user,
    },
  });
};

// All Login and Signup Functionality
exports.signUp = catchAsync(async (req, res, next) => {
  const { email, name } = req.body;

  if (!email || !name) {
    return next(new AppError("Please provide name and email", 400));
  }

  // Check if real user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return next(new AppError("User already exists!", 400));
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Store in Redis with 10 min expiry
  await client.set(
    `signup:${email}`,
    JSON.stringify({
      name,
      email,
      otp,
      verified: false,
    }),
    { EX: 600 },
  );

  // Send OTP email
  await sendEmail({
    email,
    subject: "Verify Your Email — ChordSense",
    html: otpTemplate(otp),
  });

  res.status(201).json({
    success: true,
    message: "OTP sent to email successfully!!",
  });
});

exports.verifyOTP = catchAsync(async (req, res, next) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return next(new AppError("Please provide email and OTP", 400));
  }

  const data = await client.get(`signup:${email}`);
  if (!data) {
    return next(new AppError("OTP expired. Please sign up again.", 401));
  }

  const user = JSON.parse(data);

  if (Number(user.otp) !== Number(otp)) {
    return next(new AppError("Invalid OTP entered!!", 401));
  }

  // Mark verified, reset TTL for password step
  user.verified = true;
  await client.set(`signup:${email}`, JSON.stringify(user), { EX: 600 });

  res.status(200).json({
    success: true,
    message: "Email verified successfully!!",
  });
});

exports.resendOTP = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const data = await client.get(`signup:${email}`);
  if (!data) {
    return next(new AppError("Session expired. Please sign up again.", 400));
  }

  const user = JSON.parse(data);
  const otp = Math.floor(100000 + Math.random() * 900000);
  user.otp = otp;

  await client.set(`signup:${email}`, JSON.stringify(user), { EX: 600 });

  await sendEmail({
    email: user.email,
    subject: "Verify Your Email — ChordSense",
    html: otpTemplate(otp),
  });

  res.status(200).json({
    success: true,
    message: "OTP resent successfully",
  });
});

exports.passwordAddition = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfirm } = req.body;

  if (!email || !password || !passwordConfirm) {
    return next(new AppError("Please provide all fields", 400));
  }

  const data = await client.get(`signup:${email}`);
  if (!data) {
    return next(new AppError("Session expired. Please sign up again.", 400));
  }

  const userData = JSON.parse(data);

  if (!userData.verified) {
    return next(new AppError("Please verify your email first.", 401));
  }

  const newUser = await User.create({
    name: userData.name,
    email: userData.email,
    password,
    passwordConfirm,
  });

  // Clean up Redis
  await client.del(`signup:${email}`);

  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1. Check whether user has input both fields
  if (!email || !password) {
    return next(new AppError("Please enter both email and password!!", 400));
  }

  // 2. Check whether that user exists
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    const message = "Invalid email or password!!";
    return next(new AppError(message, 401));
  }

  // 3. Create JWT token and send it
  createSendToken(user, 200, res);
});

// Protection Functionality
exports.protect = catchAsync(async (req, res, next) => {
  // 1. Getting the token and check if it's there

  // CONCEPT: This acts as a middleware. When user requests access for all Tours, it sends a header with it. That header contains token of logged in user and if user is not logged in then of course the token does not exists.
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "You are not logged in!! Please log in to get access!!",
        401,
      ),
    );
  }

  // 2. Verification Token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3. Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user with the token no longer exists!!", 401),
    );
  }

  // 4. Check if user changed password after the token was issued
  if (currentUser.passwordChangedAfter(decoded.iat)) {
    return next(
      new AppError(
        "The user recently changed the password!! Please log in again!!",
        401,
      ),
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action!", 403),
      );
    }
    next();
  };
};

// All Password Updating functionalities
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1. Get user POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with this email address", 404));
  }

  // 2. Generate a random reset Token
  const resetToken = user.createPassResetToken();
  await user.save({ validateBeforeSave: false });

  // 3. Send it to user's mail
  const resetURL = `http://localhost:5173/reset-password/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with you new password and passwordconfirm to: ${resetURL}\n If you didn't forget your password please ignore this email!!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Reset Your Password — ChordSense",
      html: forgotPasswordTemplate(resetURL),
    });

    res.status(201).json({
      status: "success",
      message: "Token sent to an email!!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.save();

    return next(
      new AppError(
        "There is an error in sending email!! Please try again later!!",
      ),
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1. Get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2. Check token validity
  if (!user) {
    return next(new AppError("Token is invalid or expired", 400));
  }

  // 3. Set new password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetExpires = undefined;
  user.passwordResetToken = undefined;

  await user.save();

  // 4. Log user in
  createSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1. Check the user in collection
  const user = await User.findById(req.user.id).select("+password");

  // 2. Check if POSTed current password is correct
  const isCorrect = await user.correctPassword(
    req.body.currPassword,
    user.password,
  );
  if (!isCorrect) {
    return next(
      new AppError(
        "You have entered wrong current password!! Please try again!",
        401,
      ),
    );
  }

  // 3. If so, update the password
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.newPasswordConfirm;
  await user.save();

  // 4. Log in user, and send JWT
  createSendToken(user, 200, res);
});

// Logout Functionality
exports.logOut = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, {
    lastActive: Date.now(),
  });

  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "User has successfully logged out!!",
  });
});
