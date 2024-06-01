const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all branches
router.get('/', (req, res) => {
  db.query('SELECT * FROM Library_Branches', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a branch by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Library_Branches WHERE Branch_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new branch
router.post('/', (req, res) => {
  const { Branch_ID, Branch_name, Address, Contact_info } = req.body;
  db.query('INSERT INTO Library_Branches (Branch_ID, Branch_name, Address, Contact_info) VALUES (?, ?, ?, ?)', [Branch_ID, Branch_name, Address, Contact_info], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Branch created', id: results.insertId });
  });
});

// Update a branch
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Branch_name, Address, Contact_info } = req.body;
  db.query('UPDATE Library_Branches SET Branch_name = ?, Address = ?, Contact_info = ? WHERE Branch_ID = ?', [Branch_name, Address, Contact_info, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Branch updated' });
  });
});

// Delete a branch
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Library_Branches WHERE Branch_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Branch deleted' });
  });
});

module.exports = router;
