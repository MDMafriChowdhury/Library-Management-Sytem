const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all shelves
router.get('/', (req, res) => {
  db.query('SELECT * FROM Shelves', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a shelf by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Shelves WHERE Shelves_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new shelf
router.post('/', (req, res) => {
  const { Shelves_ID, location, type } = req.body;
  db.query('INSERT INTO Shelves (Shelves_ID, location, type) VALUES (?, ?, ?)', [Shelves_ID, location, type], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Shelf created', id: results.insertId });
  });
});

// Update a shelf
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { location, type } = req.body;
  db.query('UPDATE Shelves SET location = ?, type = ? WHERE Shelves_ID = ?', [location, type, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Shelf updated' });
  });
});

// Delete a shelf
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Shelves WHERE Shelves_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Shelf deleted' });
  });
});

module.exports = router;
