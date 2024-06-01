const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all member institutes
router.get('/', (req, res) => {
  db.query('SELECT * FROM Members_Institute', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new member institute association
router.post('/', (req, res) => {
  const { Member_ID, Institute } = req.body;
  db.query('INSERT INTO Members_Institute (Member_ID, Institute) VALUES (?, ?)', [Member_ID, Institute], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member institute association created', id: results.insertId });
  });
});

// Delete a member institute association
router.delete('/:memberId/:institute', (req, res) => {
  const { memberId, institute } = req.params;
  db.query('DELETE FROM Members_Institute WHERE Member_ID = ? AND Institute = ?', [memberId, institute], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member institute association deleted' });
  });
});

module.exports = router;
