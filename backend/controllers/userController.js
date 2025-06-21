// backend/controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.status(400).json({ message: 'All fields are required.' });

  if (await User.findOne({ where: { email } })) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.status(201).json({ message: 'Registered', user: { id: user.id, name: user.name, email: user.email } });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email & password required.' });

  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1d' });
  res.status(200).json({ message: 'Login ok', token, user: { id: user.id, name: user.name, email: user.email } });
};
