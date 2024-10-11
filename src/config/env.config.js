require('dotenv').config();

const envConfig = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'postgres',
  DB_PASS: process.env.DB_PASS || 'password',
  DB_NAME: process.env.DB_NAME || 'blockchain_price_tracker',
  DB_PORT: process.env.DB_PORT || 5432,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  MORALIS_API_KEY: process.env.MORALIS_API_KEY,
};

module.exports = envConfig;
