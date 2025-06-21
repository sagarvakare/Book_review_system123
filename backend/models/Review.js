// backend/models/Review.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Review', {
    content: DataTypes.TEXT,
    rating: { type: DataTypes.INTEGER, allowNull: false }
  });
};
