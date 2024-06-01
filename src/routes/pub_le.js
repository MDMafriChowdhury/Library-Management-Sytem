const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all publisher library event associations
router.get('/', (req, res) => {
  db.query('SELECT * FROM PUB_LE', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new publisher library event association
router.post('/', (req, res) => {
  const { Publisher_name, Event_ID } = req.body;
  db.query('INSERT INTO PUB_LE (Publisher_name, Event_ID) VALUES (?, ?)', [Publisher_name, Event_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher library event association created', id: results.insertId });
  });
});

// Delete a publisher library event association
router.delete('/:publisherName/:eventId', (req, res) => {
  const { publisherName, eventId } = req.params;
  db.query('DELETE FROM PUB_LE WHERE Publisher_name = ? AND Event_ID = ?', [publisherName, eventId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher library event association deleted' });
  });
});

module.exports = router;
