// backend/models/Book.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Book', {
    title: { type: DataTypes.STRING, allowNull: false },
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
    publishedYear: DataTypes.INTEGER,
    image: DataTypes.STRING,
  });
};
