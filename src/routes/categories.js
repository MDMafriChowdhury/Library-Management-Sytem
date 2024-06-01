const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all categories
router.get('/', (req, res) => {
  db.query('SELECT * FROM Categories', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a category by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Categories WHERE Category_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new category
router.post('/', (req, res) => {
  const { Category_ID, Category_name, Category_description } = req.body;
  db.query('INSERT INTO Categories (Category_ID, Category_name, Category_description) VALUES (?, ?, ?)', [Category_ID, Category_name, Category_description], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Category created', id: results.insertId });
  });
});

// Update a category
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Category_name, Category_description } = req.body;
  db.query('UPDATE Categories SET Category_name = ?, Category_description = ? WHERE Category_ID = ?', [Category_name, Category_description, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Category updated' });
  });
});

// Delete a category
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Categories WHERE Category_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Category deleted' });
  });
});

module.exports = router;
