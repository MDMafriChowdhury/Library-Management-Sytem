const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all book copies
router.get('/', (req, res) => {
  db.query('SELECT * FROM Book_Copies', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get book copies by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Book_Copies WHERE BookCopy_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new book copy
router.post('/', (req, res) => {
  const { BookCopy_ID, Book_ISBN, Book_status } = req.body;
  db.query('INSERT INTO Book_Copies (BookCopy_ID, Book_ISBN, Book_status) VALUES (?, ?, ?)', [BookCopy_ID, Book_ISBN, Book_status], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book copy created', id: results.insertId });
  });
});

// Update a book copy
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Book_ISBN, Book_status } = req.body;
  db.query('UPDATE Book_Copies SET Book_ISBN = ?, Book_status = ? WHERE BookCopy_ID = ?', [Book_ISBN, Book_status, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book copy updated' });
  });
});

// Delete a book copy
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Book_Copies WHERE BookCopy_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book copy deleted' });
  });
});

module.exports = router;
