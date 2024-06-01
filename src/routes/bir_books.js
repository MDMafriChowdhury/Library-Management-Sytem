const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all book issuer receiver books
router.get('/', (req, res) => {
  db.query('SELECT * FROM BIR_BOOKS', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new book issuer receiver book association
router.post('/', (req, res) => {
  const { Book_ISBN, Book_Issuer_receiver_ID } = req.body;
  db.query('INSERT INTO BIR_BOOKS (Book_ISBN, Book_Issuer_receiver_ID) VALUES (?, ?)', [Book_ISBN, Book_Issuer_receiver_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer receiver book association created', id: results.insertId });
  });
});

// Delete a book issuer receiver book association
router.delete('/:isbn/:birId', (req, res) => {
  const { isbn, birId } = req.params;
  db.query('DELETE FROM BIR_BOOKS WHERE Book_ISBN = ? AND Book_Issuer_receiver_ID = ?', [isbn, birId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer receiver book association deleted' });
  });
});


router.get('/borrowers', (req, res) => {
  // Query to fetch borrowers list from BIR_BOOKS table
  const query = `
      SELECT m.Member_name,m.Member_Contact, b.Book_ISBN, b.Title
      FROM BIR_BOOKS bir
      JOIN BIR_MEM bir_mem ON bir.Book_Issuer_receiver_ID = bir_mem.Book_Issuer_receiver_ID
      JOIN Members m ON bir_mem.Member_ID = m.Member_ID
      JOIN Books b ON bir.Book_ISBN = b.Book_ISBN;
  `;
  
  // Execute the query
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching borrowers list:', err);
          res.status(500).json({ error: 'Internal server error' });
      } else {
          // Send the list of borrowers along with book details as JSON response
          res.json(results);
      }
  });
});






module.exports = router;
