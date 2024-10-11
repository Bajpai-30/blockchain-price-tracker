const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database.config');

const Alert = sequelize.define('Alert', {
  chain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  targetPrice: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  triggered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Alert;
