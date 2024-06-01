const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all members
router.get('/', (req, res) => {
  db.query('SELECT * FROM Members', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a member by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Members WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new member
router.post('/', (req, res) => {
  const { Member_ID, Member_name, Member_Contact, Membership_status, Degree, Institute, Year, Result } = req.body;
  db.query('INSERT INTO Members (Member_ID, Member_name, Member_Contact, Membership_status, Degree, Institute, Year, Result) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Member_ID, Member_name, Member_Contact, Membership_status, Degree, Institute, Year, Result], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member created', id: results.insertId });
  });
});

// Update a member
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Member_name, Member_Contact, Membership_status, Degree, Institute, Year, Result } = req.body;
  db.query('UPDATE Members SET Member_name = ?, Member_Contact = ?, Membership_status = ?, Degree = ?, Institute = ?, Year = ?, Result = ? WHERE Member_ID = ?', [Member_name, Member_Contact, Membership_status, Degree, Institute, Year, Result, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member updated' });
  });
});

// Delete a member
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Members WHERE Member_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Member deleted' });
  });
});

module.exports = router;
