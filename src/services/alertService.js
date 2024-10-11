const { Op } = require('sequelize');
const Price  = require('../models/Price');
const Alert = require('../models/Alert');
const emailService = require('./emailService');

// Check for price increase and send email alert if price increased by 3% in the last hour
const checkForPriceIncrease = async (chain, currentPrice) => {
  const oneHourAgo = new Date();
  const oldPriceRecord = await Price.findOne({
    where: { 
      chain, 
      createdAt: { [Op.lte]: oneHourAgo }  // Fetch price that was created before or exactly one hour ago
    },
    order: [['createdAt', 'DESC']],  // Get the latest record before one hour ago
  });

  if (!oldPriceRecord) {
    console.log(`No price record found for ${chain} from one hour ago.`);
    return;
  }

  const oldPrice = oldPriceRecord.price;
  console.log(`Old price for ${chain}: $${oldPrice}`);

  const percentageIncrease = ((currentPrice - oldPrice) / oldPrice) * 100;
  console.log(`Percentage increase for ${chain}: ${percentageIncrease}%`);

    if (percentageIncrease > 3) {
      // Send email alert to the specified email
      await emailService.sendEmail(
        'hyperhire_assignment@hyperhire.in',
        `Price Alert for ${chain}`,
        `The price of ${chain} has increased by more than 3% in the last hour!`
      );
    }
  
};

// Trigger alerts if price condition is met (user-set alert)
const triggerPriceAlert = async (chain, currentPrice) => {
  const alerts = await Alert.findAll({
    where: {
      chain,
      targetPrice: { [Op.lte]: currentPrice },
      triggered: false,
    },
  });

  if (alerts.length > 0) {
    alerts.forEach(async (alert) => {
      await emailService.sendEmail(alert.email, `Price Alert for ${chain}`, `The price of ${chain} has reached ${currentPrice}.`);
      await alert.update({ triggered: true });  // Mark alert as triggered
    });
  }
};

module.exports = { checkForPriceIncrease, triggerPriceAlert };
