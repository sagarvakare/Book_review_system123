// middleware/adminAuth.js
module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token !== 'admin-secret-token') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};
