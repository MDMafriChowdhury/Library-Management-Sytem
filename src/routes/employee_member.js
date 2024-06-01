const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all employee members
router.get('/', (req, res) => {
  db.query('SELECT * FROM Employee_member', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get employee member by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Employee_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new employee member
router.post('/', (req, res) => {
  const { Member_ID, e_limit, e_duration } = req.body;
  db.query('INSERT INTO Employee_member (Member_ID, e_limit, e_duration) VALUES (?, ?, ?)', [Member_ID, e_limit, e_duration], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee member created', id: results.insertId });
  });
});

// Update an employee member
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { e_limit, e_duration } = req.body;
  db.query('UPDATE Employee_member SET e_limit = ?, e_duration = ? WHERE Member_ID = ?', [e_limit, e_duration, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee member updated' });
  });
});

// Delete an employee member
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Employee_member WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Employee member deleted' });
  });
});

module.exports = router;
