const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all library holidays
router.get('/', (req, res) => {
  db.query('SELECT * FROM Library_Holiday', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get library holidays by event ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Library_Holiday WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create new library holiday
router.post('/', (req, res) => {
  const { Event_ID, Holiday_date, Holiday_details } = req.body;
  db.query('INSERT INTO Library_Holiday (Event_ID, Holiday_date, Holiday_details) VALUES (?, ?, ?)', [Event_ID, Holiday_date, Holiday_details], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library holiday created', id: results.insertId });
  });
});

// Update library holiday
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Holiday_date, Holiday_details } = req.body;
  db.query('UPDATE Library_Holiday SET Holiday_date = ?, Holiday_details = ? WHERE Event_ID = ?', [Holiday_date, Holiday_details, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library holiday updated' });
  });
});

// Delete library holiday
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Library_Holiday WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library holiday deleted' });
  });
});

module.exports = router;
