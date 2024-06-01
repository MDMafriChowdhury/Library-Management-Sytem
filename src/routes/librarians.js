const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all librarians
router.get('/', (req, res) => {
  db.query('SELECT * FROM Librarian', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a librarian by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Librarian WHERE Librarian_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new librarian
router.post('/', (req, res) => {
  const { Librarian_ID, Librarian_name, Librarian_contact, Role } = req.body;
  db.query('INSERT INTO Librarian (Librarian_ID, Librarian_name, Librarian_contact, Role) VALUES (?, ?, ?, ?)', [Librarian_ID, Librarian_name, Librarian_contact, Role], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Librarian created', id: results.insertId });
  });
});

// Update a librarian
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Librarian_name, Librarian_contact, Role } = req.body;
  db.query('UPDATE Librarian SET Librarian_name = ?, Librarian_contact = ?, Role = ? WHERE Librarian_ID = ?', [Librarian_name, Librarian_contact, Role, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Librarian updated' });
  });
});

// Delete a librarian
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Librarian WHERE Librarian_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Librarian deleted' });
  });
});

module.exports = router;
