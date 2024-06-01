const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all authors
router.get('/', (req, res) => {
  db.query('SELECT * FROM Authors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get an author by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log('Author ID:', id); // Log the ID parameter
  db.query('SELECT * FROM Authors WHERE Author_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});



// Create a new author
router.post('/', (req, res) => {
  const { Author_ID, Author_name, Nationality, Biography } = req.body;
  db.query('INSERT INTO Authors (Author_ID, Author_name, Nationality, Biography) VALUES (?, ?, ?, ?)', [Author_ID, Author_name, Nationality, Biography], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Author created', id: results.insertId });
  });
});

// Update an author
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Author_name, Nationality, Biography } = req.body;
  db.query('UPDATE Authors SET Author_name = ?, Nationality = ?, Biography = ? WHERE Author_ID = ?', [Author_name, Nationality, Biography, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Author updated' });
  });
});

// Delete an author
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Authors WHERE Author_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Author deleted' });
  });
});

module.exports = router;
