const express = require('express');
const priceController = require('../controllers/price.controller');
const alertController = require('../controllers/alert.controller');
const swapController = require('../controllers/swap.controller');  // Import the swap controller

const router = express.Router();

// Routes for price-related APIs
router.get('/prices', priceController.getHourlyPrices);  // Route to get prices for the last 24 hours

// Route for swap-related API (moved to swap controller)
router.post('/swap-rate', swapController.getSwapRate);  

// Routes for alert-related APIs
router.post('/alerts', alertController.setPriceAlert);  // Route to set a price alert

module.exports = router;
