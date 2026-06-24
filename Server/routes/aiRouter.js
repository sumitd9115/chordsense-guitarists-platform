const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController.js");
const assistantController = require("../controllers/assistantController.js");

router.use(authController.protect);

// POST /api/ai/ask
router.post("/ask", assistantController.responseGenerator);
router.get("/getMyChats", assistantController.getMyChats);
router.get("/chat/:id", assistantController.getChat);

module.exports = router;
