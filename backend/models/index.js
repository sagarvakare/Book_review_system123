// backend/models/index.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = require('./User')(sequelize, DataTypes);
const Book = require('./Book')(sequelize, DataTypes);
const Review = require('./Review')(sequelize, DataTypes);

// Relations
User.hasMany(Review);
Book.hasMany(Review);
Review.belongsTo(User);
Review.belongsTo(Book);

sequelize.sync();

module.exports = { sequelize, User, Book, Review };
