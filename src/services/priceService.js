const axios = require('axios');
const Price  = require('../models/Price');
const alertService = require('./alertService');
const { Op } = require('sequelize');

// Fetch and save prices for Ethereum and Polygon
const fetchAndSavePrices = async () => {
  const ethPrice = await getPrice('ethereum');
  const polygonPrice = await getPrice('matic-network');

  // Save the prices in the database
  await Price.create({ chain: 'ethereum', price: ethPrice });
  await Price.create({ chain: 'polygon', price: polygonPrice });

  // Check for a 3% price increase and trigger alerts
  await alertService.checkForPriceIncrease('ethereum', ethPrice);
  await alertService.checkForPriceIncrease('polygon', polygonPrice);
};

// Fetch price from CoinGecko
const getPrice = async (chain) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${chain}&vs_currencies=usd`);
    return response.data[chain].usd;
  } catch (error) {
    console.error(`Error fetching price for ${chain}:`, error);
    throw error;
  }
};


module.exports = { fetchAndSavePrices };
