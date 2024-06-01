const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all book issuer receiver members
router.get('/', (req, res) => {
  db.query('SELECT * FROM BIR_MEM', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new book issuer receiver member association
router.post('/', (req, res) => {
  const { Book_Issuer_receiver_ID, Member_ID } = req.body;
  db.query('INSERT INTO BIR_MEM (Book_Issuer_receiver_ID, Member_ID) VALUES (?, ?)', [Book_Issuer_receiver_ID, Member_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer receiver member association created', id: results.insertId });
  });
});

// Delete a book issuer receiver member association
router.delete('/:birId/:memberId', (req, res) => {
  const { birId, memberId } = req.params;
  db.query('DELETE FROM BIR_MEM WHERE Book_Issuer_receiver_ID = ? AND Member_ID = ?', [birId, memberId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer receiver member association deleted' });
  });
});

module.exports = router;
