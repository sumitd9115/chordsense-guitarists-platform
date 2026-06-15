const express = require('express');
const progressionController = require('../controllers/progressionController');
const authController = require('../controllers/authController');

const router = express.Router();
 
// Protected — must be logged in
router.use(authController.protect);

router.post('/generate', progressionController.generateProgression);

module.exports = router;