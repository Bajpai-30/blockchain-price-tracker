const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require('../config/database.config');

const Price = sequelize.define('Price', {
  chain: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(18, 8),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Price;
