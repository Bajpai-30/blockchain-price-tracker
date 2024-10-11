const { Sequelize } = require('sequelize');
const envConfig = require('./env.config');

const sequelize = new Sequelize(envConfig.DB_NAME, envConfig.DB_USER, envConfig.DB_PASS, {
  host: envConfig.DB_HOST,
  dialect: 'postgres',
  port: envConfig.DB_PORT,
  logging: false, // Disable logging for production
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { sequelize, connectDB };
