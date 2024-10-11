const cron = require('node-cron');
const priceService = require('../services/priceService');

// Schedule to fetch prices every 5 minutes
const start = () => {
  cron.schedule('*/1 * * * *', async () => {
    console.log('Fetching prices and storing in the database...');
    await priceService.fetchAndSavePrices();
  });
};

module.exports = { start };
