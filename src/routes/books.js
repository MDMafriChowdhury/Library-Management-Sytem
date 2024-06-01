const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all books
router.get('/', (req, res) => {
  db.query('SELECT * FROM Books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a book by ISBN
router.get('/:isbn', (req, res) => {
  const { isbn } = req.params;
  db.query('SELECT * FROM Books WHERE Book_ISBN = ?', [isbn], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new book
router.post('/', (req, res) => {
  const { Book_ID, Book_ISBN, Title, genre, Publication_date, Shelves_ID, Librarian_ID } = req.body;
  db.query('INSERT INTO Books (Book_ID, Book_ISBN, Title, genre, Publication_date, Shelves_ID, Librarian_ID) VALUES (?, ?, ?, ?, ?, ?, ?)', [Book_ID, Book_ISBN, Title, genre, Publication_date, Shelves_ID, Librarian_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book created', id: results.insertId });
  });
});

// Update a book
router.put('/:isbn', (req, res) => {
  const { isbn } = req.params;
  const { Title, genre, Publication_date, Shelves_ID, Librarian_ID } = req.body;
  db.query('UPDATE Books SET Title = ?, genre = ?, Publication_date = ?, Shelves_ID = ?, Librarian_ID = ? WHERE Book_ISBN = ?', [Title, genre, Publication_date, Shelves_ID, Librarian_ID, isbn], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book updated' });
  });
});

// Delete a book
router.delete('/:isbn', (req, res) => {
  const { isbn } = req.params;
  db.query('DELETE FROM Books WHERE Book_ISBN = ?', [isbn], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book deleted' });
  });
});

module.exports = router;
