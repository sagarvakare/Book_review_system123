// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { listUsers, listReviews, deleteReview } = require('../controllers/adminController');

router.get('/users', listUsers);
router.get('/reviews', listReviews);
router.delete('/reviews/:id', deleteReview);

module.exports = router;
