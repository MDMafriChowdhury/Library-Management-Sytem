const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all library event members
router.get('/', (req, res) => {
  db.query('SELECT * FROM LE_MEM', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new library event member association
router.post('/', (req, res) => {
  const { Member_ID, Event_ID } = req.body;
  db.query('INSERT INTO LE_MEM (Member_ID, Event_ID) VALUES (?, ?)', [Member_ID, Event_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library event member association created', id: results.insertId });
  });
});

// Delete a library event member association
router.delete('/:memberId/:eventId', (req, res) => {
  const { memberId, eventId } = req.params;
  db.query('DELETE FROM LE_MEM WHERE Member_ID = ? AND Event_ID = ?', [memberId, eventId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Library event member association deleted' });
  });
});

module.exports = router;
