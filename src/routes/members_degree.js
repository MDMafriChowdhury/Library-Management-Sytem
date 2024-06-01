const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all member degrees
router.get('/', (req, res) => {
  db.query('SELECT * FROM Members_Degree', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new member degree association
router.post('/', (req, res) => {
  const { Member_ID, Degree } = req.body;
  db.query('INSERT INTO Members_Degree (Member_ID, Degree) VALUES (?, ?)', [Member_ID, Degree], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member degree association created', id: results.insertId });
  });
});

// Delete a member degree association
router.delete('/:memberId/:degree', (req, res) => {
  const { memberId, degree } = req.params;
  db.query('DELETE FROM Members_Degree WHERE Member_ID = ? AND Degree = ?', [memberId, degree], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member degree association deleted' });
  });
});

module.exports = router;
