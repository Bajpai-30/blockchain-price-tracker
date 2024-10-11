const axios = require('axios');

// Calculate swap rate from ETH to BTC with a 0.03% fee
const calculateSwapRate = async (ethAmount) => {
  if (!ethAmount || isNaN(ethAmount) || ethAmount <= 0) {
    throw new Error('Invalid ETH amount');
  }

  try {
    // Fetch ETH and BTC prices from CoinGecko
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd');
    const ethToUsd = response.data.ethereum.usd;
    const btcToUsd = response.data.bitcoin.usd;

    // Calculate the amount of BTC you would get
    const btcAmount = (ethAmount * ethToUsd) / btcToUsd;

    // Calculate the total fee (0.03%)
    const feePercentage = 0.03;
    const feeEth = ethAmount * feePercentage;
    const feeInDollars = feeEth * ethToUsd;

    return {
      btcAmount: btcAmount.toFixed(8),
      fee: {
        eth: feeEth.toFixed(8),
        usd: feeInDollars.toFixed(2),
      },
    };
  } catch (error) {
    console.error('Error calculating swap rate:', error);
    throw error;
  }
};

module.exports = { calculateSwapRate };
