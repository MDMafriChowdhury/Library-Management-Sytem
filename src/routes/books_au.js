const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all book author associations
router.get('/', (req, res) => {
  db.query('SELECT * FROM BOOKS_AU', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new book author association
router.post('/', (req, res) => {
  const { Book_ISBN, Author_ID } = req.body;
  db.query('INSERT INTO BOOKS_AU (Book_ISBN, Author_ID) VALUES (?, ?)', [Book_ISBN, Author_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book author association created', id: results.insertId });
  });
});

// Delete a book author association
router.delete('/:isbn/:authorId', (req, res) => {
  const { isbn, authorId } = req.params;
  db.query('DELETE FROM BOOKS_AU WHERE Book_ISBN = ? AND Author_ID = ?', [isbn, authorId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book author association deleted' });
  });
});

module.exports = router;
