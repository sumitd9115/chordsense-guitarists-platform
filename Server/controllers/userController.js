const User = require("../models/userModel.js");
const AppError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");

exports.getUser = catchAsync(async (req, res, next) => {
  if (req.user) req.params.id = req.user.id;
  let query = User.findById(req.params.id);
  const doc = await query;

  if (!doc) {
    return next(new AppError("No document found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    data: {
      data: doc,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const newdoc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!newdoc) {
    return next(new AppError("No document found with this Id", 404));
  }

  res.status(201).json({
    success: true,
    data: newdoc,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError("No document found with this id!!", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
