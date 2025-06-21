const { Sequelize } = require('sequelize');
require('dotenv').config({ path: './config/.env' });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ DB Connected'))
  .catch((err) => console.error('❌ DB Connection Failed:', err));

module.exports = sequelize;
