const swapService = require('../services/swapService');

// Controller to get ETH to BTC swap rate
const getSwapRate = async (req, res) => {
  const { ethAmount } = req.body;

  try {
    if (!ethAmount || isNaN(ethAmount) || ethAmount <= 0) {
      return res.status(400).json({ message: 'Invalid Ethereum amount' });
    }

    // Calculate the swap rate using the service
    const swapRate = await swapService.calculateSwapRate(ethAmount);
    res.status(200).json(swapRate); // Send the calculated swap rate as the response
  } catch (error) {
    res.status(500).json({ message: 'Error calculating swap rate', error: error.message });
  }
};

module.exports = { getSwapRate };
