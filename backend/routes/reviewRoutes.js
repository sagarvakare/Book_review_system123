const express = require('express');
const router = express.Router();

// ✅ Import the actual controller functions
const { createReview, getReviews } = require('../controllers/reviewController');

// ✅ Attach routes
router.post('/', createReview);
router.get('/', getReviews);

module.exports = router;
