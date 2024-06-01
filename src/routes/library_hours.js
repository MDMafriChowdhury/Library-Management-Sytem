const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all library hours
router.get('/', (req, res) => {
  db.query('SELECT * FROM Library_Hours', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get library hours by event ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Library_Hours WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create new library hours
router.post('/', (req, res) => {
  const { Event_ID, Day, Opening_time, Closing_time } = req.body;
  db.query('INSERT INTO Library_Hours (Event_ID, Day, Opening_time, Closing_time) VALUES (?, ?, ?, ?)', [Event_ID, Day, Opening_time, Closing_time], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library hours created', id: results.insertId });
  });
});

// Update library hours
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Day, Opening_time, Closing_time } = req.body;
  db.query('UPDATE Library_Hours SET Day = ?, Opening_time = ?, Closing_time = ? WHERE Event_ID = ?', [Day, Opening_time, Closing_time, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library hours updated' });
  });
});

// Delete library hours
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Library_Hours WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library hours deleted' });
  });
});

module.exports = router;
