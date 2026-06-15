const express = require("express");
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController.js");
const uRouter = express.Router();

// In userRouter.js — add before the protect middleware
uRouter.get("/me", authController.protect, (req, res) => {
  res.status(200).json({
    success: true,
    data: { user: req.user },
  });
});

// Auth Routes
uRouter.post("/signUp", authController.signUp);
uRouter.post("/verifyOTP", authController.verifyOTP);
uRouter.post("/resendOTP", authController.resendOTP);
uRouter.post("/passwordAddition", authController.passwordAddition);
uRouter.post("/login", authController.login);
uRouter.post("/logout", authController.protect, authController.logOut);
uRouter.post("/forgotPassword", authController.forgotPassword);
uRouter.patch("/resetPassword/:token", authController.resetPassword);

uRouter.use(authController.protect);

// User Routes
uRouter.patch("/updatePassword", authController.updatePassword);
uRouter
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateUser);

module.exports = uRouter;
