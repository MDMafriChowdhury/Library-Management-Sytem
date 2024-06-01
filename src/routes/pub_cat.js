const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all publisher categories
router.get('/', (req, res) => {
  db.query('SELECT * FROM PUB_CAT', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create a new publisher category association
router.post('/', (req, res) => {
  const { Publisher_name, Category_ID } = req.body;
  db.query('INSERT INTO PUB_CAT (Publisher_name, Category_ID) VALUES (?, ?)', [Publisher_name, Category_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher category association created', id: results.insertId });
  });
});

// Delete a publisher category association
router.delete('/:publisherName/:categoryId', (req, res) => {
  const { publisherName, categoryId } = req.params;
  db.query('DELETE FROM PUB_CAT WHERE Publisher_name = ? AND Category_ID = ?', [publisherName, categoryId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher category association deleted' });
  });
});

module.exports = router;
