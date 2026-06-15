const express = require("express");
const progressionController = require("../controllers/progressionController");
const authController = require("../controllers/authController");

const router = express.Router();

// Protected — must be logged in
router.use(authController.protect);

router.post("/generate", progressionController.generateProgression);
router.post("/save", progressionController.saveProg);
router.get("/getMyProgressions", progressionController.getMyProg)
router.get("/:id", progressionController.getOneProg);

module.exports = router;
