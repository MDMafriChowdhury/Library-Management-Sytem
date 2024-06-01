const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all teacher members
router.get('/', (req, res) => {
  db.query('SELECT * FROM Teacher_member', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get teacher member by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Teacher_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new teacher member
router.post('/', (req, res) => {
  const { Member_ID, highest_qualifications, research_area, teach_limit, t_duration } = req.body;
  db.query('INSERT INTO Teacher_member (Member_ID, highest_qualifications, research_area, teach_limit, t_duration) VALUES (?, ?, ?, ?, ?)', [Member_ID, highest_qualifications, research_area, teach_limit, t_duration], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Teacher member created', id: results.insertId });
  });
});

// Update a teacher member
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { highest_qualifications, research_area, teach_limit, t_duration } = req.body;
  db.query('UPDATE Teacher_member SET highest_qualifications = ?, research_area = ?, teach_limit = ?, t_duration = ? WHERE Member_ID = ?', [highest_qualifications, research_area, teach_limit, t_duration, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Teacher member updated' });
  });
});

// Delete a teacher member
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Teacher_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Teacher member deleted' });
  });
});

module.exports = router;
