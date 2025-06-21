// backend/routes/bookRoutes.js
const express = require('express');
const { getBooks, getBookById, addBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.delete('/:id', deleteBook);

module.exports = router;
