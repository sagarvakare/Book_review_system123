// backend/controllers/bookController.js
const { Book } = require('../models');

exports.getBooks = async (_, res) => {
  const books = await Book.findAll();
  res.json(books);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

exports.addBook = async (req, res) => {
  const data = req.body;
  const book = await Book.create(data);
  res.status(201).json(book);
};

exports.deleteBook = async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  await book.destroy();
  res.json({ message: 'Deleted' });
};
