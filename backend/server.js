// backend/server.js
const app = require('./app');
const sequelize = require('./database');

const PORT = process.env.PORT || 5000;

sequelize.authenticate()
  .then(() => console.log('✅ DB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
