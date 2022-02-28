// Import express router to set it up
const express = require('express');

// Get the prof controller
const portfolioController = require('../controllers/portfolio'); 

// Store in a variable called router
const router = express.Router();

// Get the JSON data specified from the controller to the /portfolio router
router.get('/professional', portfolioController.getPortfolioData); 

// Export Router
module.exports = router;