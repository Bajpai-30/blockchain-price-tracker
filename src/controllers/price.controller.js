const Price  = require('../models/Price');
const { Op, Sequelize } = require('sequelize');

// Get prices recorded within the last 24 hours
const getHourlyPrices = async (req, res) => {
  try {
    // Fetch all prices recorded within the last 24 hours
    const prices = await Price.findAll({
      where: {
        createdAt: {
          [Op.gte]: Sequelize.literal("NOW() - INTERVAL '24 HOURS'"),
        },
      },
      order: [['createdAt', 'ASC']], // Sort by the time they were created (oldest first)
    });

    res.status(200).json(prices); // Send the fetched prices as the response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prices', error: error.message });
  }
};

module.exports = { getHourlyPrices };
