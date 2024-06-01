const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all member results
router.get('/', (req, res) => {
  db.query('SELECT * FROM Members_Result', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new member result association
router.post('/', (req, res) => {
  const { Member_ID, Result } = req.body;
  db.query('INSERT INTO Members_Result (Member_ID, Result) VALUES (?, ?)', [Member_ID, Result], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member result association created', id: results.insertId });
  });
});

// Delete a member result association
router.delete('/:memberId/:result', (req, res) => {
  const { memberId, result } = req.params;
  db.query('DELETE FROM Members_Result WHERE Member_ID = ? AND Result = ?', [memberId, result], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member result association deleted' });
  });
});

module.exports = router;
