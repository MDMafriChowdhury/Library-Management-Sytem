const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all member years
router.get('/', (req, res) => {
  db.query('SELECT * FROM Members_Year', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new member year association
router.post('/', (req, res) => {
  const { Member_ID, Year } = req.body;
  db.query('INSERT INTO Members_Year (Member_ID, Year) VALUES (?, ?)', [Member_ID, Year], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member year association created', id: results.insertId });
  });
});

// Delete a member year association
router.delete('/:memberId/:year', (req, res) => {
  const { memberId, year } = req.params;
  db.query('DELETE FROM Members_Year WHERE Member_ID = ? AND Year = ?', [memberId, year], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member year association deleted' });
  });
});

module.exports = router;
