// controllers/reviewController.js

exports.createReview = async (req, res) => {
  try {
    // Your logic here
    res.status(201).json({ message: 'Review created' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    // Your logic here
    res.status(200).json({ message: 'Reviews fetched' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
