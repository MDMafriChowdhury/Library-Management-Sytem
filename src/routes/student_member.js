const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all student members
router.get('/', (req, res) => {
  db.query('SELECT * FROM Student_member', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get student member by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Student_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new student member
router.post('/', (req, res) => {
  const { Member_ID, favorites, s_limit, s_duration } = req.body;
  db.query('INSERT INTO Student_member (Member_ID, favorites, s_limit, s_duration) VALUES (?, ?, ?, ?)', [Member_ID, favorites, s_limit, s_duration], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Student member created', id: results.insertId });
  });
});

// Update a student member
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { favorites, s_limit, s_duration } = req.body;
  db.query('UPDATE Student_member SET favorites = ?, s_limit = ?, s_duration = ? WHERE Member_ID = ?', [favorites, s_limit, s_duration, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Student member updated' });
  });
});

// Delete a student member
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Student_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Student member deleted' });
  });
});

module.exports = router;
