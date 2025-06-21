// backend/db.js
const { Sequelize } = require('sequelize');

// Replace with your own DB config
const sequelize = new Sequelize('book_review_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
