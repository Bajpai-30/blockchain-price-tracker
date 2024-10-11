const Alert = require('../models/Alert');

// Set a new price alert
const setPriceAlert = async (req, res) => {
  const { chain, targetPrice, email } = req.body;

  try {
    // Create a new alert in the database
    await Alert.create({ chain, targetPrice, email });

    res.status(201).json({ message: 'Alert created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating alert', error: error.message });
  }
};

module.exports = { setPriceAlert };

