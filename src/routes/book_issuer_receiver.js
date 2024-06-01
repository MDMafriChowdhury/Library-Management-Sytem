const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all book issuers/receivers
router.get('/', (req, res) => {
  db.query('SELECT * FROM Books_Issuer_receiver', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a book issuer/receiver by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Books_Issuer_receiver WHERE Book_Issuer_receiver_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new book issuer/receiver
router.post('/', (req, res) => {
  const { Book_Issuer_receiver_ID, name, designation, qualification } = req.body;
  db.query('INSERT INTO Books_Issuer_receiver (Book_Issuer_receiver_ID, name, designation, qualification) VALUES (?, ?, ?, ?)', [Book_Issuer_receiver_ID, name, designation, qualification], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer/receiver created', id: results.insertId });
  });
});

// Update a book issuer/receiver
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, designation, qualification } = req.body;
  db.query('UPDATE Books_Issuer_receiver SET name = ?, designation = ?, qualification = ? WHERE Book_Issuer_receiver_ID = ?', [name, designation, qualification, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer/receiver updated' });
  });
});

// Delete a book issuer/receiver
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Books_Issuer_receiver WHERE Book_Issuer_receiver_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Book issuer/receiver deleted' });
  });
});

module.exports = router;
