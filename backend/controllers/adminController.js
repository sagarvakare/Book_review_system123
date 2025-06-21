// backend/controllers/adminController.js
const { Book, User, Review } = require('../models');

exports.listUsers = async (_, res) => {
  const users = await User.findAll({ attributes: ['id','name','email','createdAt'] });
  res.json(users);
};

exports.listReviews = async (_, res) => {
  const reviews = await Review.findAll({ include: ['Book','User'] });
  res.json(reviews);
};

exports.deleteReview = async (req, res) => {
  const rev = await Review.findByPk(req.params.id);
  if (!rev) return res.status(404).json({ message: 'Not found' });
  await rev.destroy();
  res.json({ message: 'Review removed' });
};
