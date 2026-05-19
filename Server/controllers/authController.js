const User = require("../models/userModel.js");
const pendingUserModel = require("../models/pendingUserModel.js");
const catchAsync = require("../utils/catchAsync.js");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError.js");
const { promisify } = require("util");
const sendEmail = require("../utils/email.js");
const crypto = require("crypto");
const {
  otpTemplate,
  forgotPasswordTemplate,
} = require("../utils/emailTemplates");

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

exports.signUp = catchAsync(async (req, res, next) => {
  const { email, name, password, passwordConfirm } = req.body;

  // Check existing real user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(new AppError("User already exists!", 400));
  }

  // Remove old pending user if exists
  const existingPendingUser = await pendingUserModel.findOne({ email });

  if (existingPendingUser) {
    await pendingUserModel.findByIdAndDelete(existingPendingUser._id);
  }

  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Hash OTP
  const hashedOTP = crypto
    .createHash("sha256")
    .update(otp.toString())
    .digest("hex");

  // Create new pending user
  const tempUser = await pendingUserModel.create({
    email,
    name,
    password,
    passwordConfirm,
    otp: hashedOTP,
    otpExpires: Date.now() + 10 * 60 * 1000,
  });

  // Send Email
  await sendEmail({
    email: tempUser.email,
    subject: "Verify Your Email",
    html: otpTemplate(otp),
  });

  // Response
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

  const tempUser = await pendingUserModel
    .findOne({ email })
    .select("+password +passwordConfirm");

  if (!tempUser) {
    return next(new AppError("User not found!!", 404));
  }

  const hashedEnteredOTP = crypto
    .createHash("sha256")
    .update(otp.toString())
    .digest("hex");

  if (tempUser.otp !== hashedEnteredOTP) {
    return next(new AppError("Invalid OTP entered!!", 401));
  }

  if (tempUser.otpExpires < Date.now()) {
    return next(new AppError("OTP Expired!!", 401));
  }

  // Create actual user
  const newUser = await User.create({
    name: tempUser.name,
    email: tempUser.email,
    password: tempUser.password,
    passwordConfirm: tempUser.passwordConfirm,
  });

  // Delete pending user
  await pendingUserModel.findByIdAndDelete(tempUser._id);

  // Login user
  createSendToken(newUser, 201, res);
});

exports.resendOTP = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const tempUser = await pendingUserModel.findOne({ email });

  if (!tempUser) {
    return next(new AppError("User not found", 404));
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  const hashedOTP = crypto
    .createHash("sha256")
    .update(otp.toString())
    .digest("hex");

  tempUser.otp = hashedOTP;
  tempUser.otpExpires = Date.now() + 10 * 60 * 1000;

  await tempUser.save({ validateBeforeSave: false });

  await sendEmail({
    email: tempUser.email,
    subject: "Verify Your Email",
    html: otpTemplate(otp),
  });

  res.status(200).json({
    success: true,
    message: "OTP resent successfully",
  });
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
