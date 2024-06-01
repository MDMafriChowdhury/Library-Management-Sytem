const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all library event authors
router.get('/', (req, res) => {
  db.query('SELECT * FROM LE_AU', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new library event author association
router.post('/', (req, res) => {
  const { Event_ID, Author_ID } = req.body;
  db.query('INSERT INTO LE_AU (Event_ID, Author_ID) VALUES (?, ?)', [Event_ID, Author_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library event author association created', id: results.insertId });
  });
});

// Delete a library event author association
router.delete('/:eventId/:authorId', (req, res) => {
  const { eventId, authorId } = req.params;
  db.query('DELETE FROM LE_AU WHERE Event_ID = ? AND Author_ID = ?', [eventId, authorId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library event author association deleted' });
  });
});

module.exports = router;
