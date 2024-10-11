// Utility to validate if a value is a valid number
const isValidNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };
  
  // Utility to validate if an email is valid
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Utility to format numbers to a specific decimal place
  const formatToDecimal = (number, decimals = 2) => {
    return parseFloat(number).toFixed(decimals);
  };
  
  // Utility to format a date to a readable string
  const formatDate = (date, locale = 'en-US') => {
    return new Date(date).toLocaleString(locale);
  };
  
  // Utility to get a date with a specified offset (in hours)
  const getDateWithOffset = (hoursOffset) => {
    const date = new Date();
    date.setHours(date.getHours() - hoursOffset);
    return date;
  };
  
  // Utility to validate if a string is a valid blockchain chain (for example: ethereum, polygon)
  const isValidBlockchainChain = (chain) => {
    const validChains = ['ethereum', 'polygon']; // Add more chains as needed
    return validChains.includes(chain.toLowerCase());
  };
  
  // Utility to convert Unix timestamp to a readable date format
  const convertUnixToDate = (unixTimestamp) => {
    return new Date(unixTimestamp * 1000).toLocaleString();
  };
  
  // Utility to generate a random string (can be used for generating unique IDs)
  const generateRandomString = (length = 8) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  
  // Utility to round a number to the nearest multiple of a given number
  const roundToNearest = (number, multiple = 1) => {
    return Math.round(number / multiple) * multiple;
  };
  
  // Utility to sleep for a specific number of milliseconds (useful in async functions)
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  // Utility to calculate percentage change between two numbers
  const calculatePercentageChange = (oldValue, newValue) => {
    if (oldValue === 0) return 0;
    const change = ((newValue - oldValue) / oldValue) * 100;
    return parseFloat(change.toFixed(2));  // Return the change with two decimal places
  };
  
  module.exports = {
    isValidNumber,
    isValidEmail,
    formatToDecimal,
    formatDate,
    getDateWithOffset,
    isValidBlockchainChain,
    convertUnixToDate,
    generateRandomString,
    roundToNearest,
    sleep,
    calculatePercentageChange,
  };
  