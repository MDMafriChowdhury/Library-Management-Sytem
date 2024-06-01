const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all publishers
router.get('/', (req, res) => {
  db.query('SELECT * FROM Publishers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get a publisher by name
router.get('/:name', (req, res) => {
  const { name } = req.params;
  db.query('SELECT * FROM Publishers WHERE Publisher_name = ?', [name], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new publisher
router.post('/', (req, res) => {
  const { Publisher_name, Publisher_Location, Publisher_Contact } = req.body;
  db.query('INSERT INTO Publishers (Publisher_name, Publisher_Location, Publisher_Contact) VALUES (?, ?, ?)', [Publisher_name, Publisher_Location, Publisher_Contact], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher created', id: results.insertId });
  });
});

// Update a publisher
router.put('/:name', (req, res) => {
  const { name } = req.params;
  const { Publisher_Location, Publisher_Contact } = req.body;
  db.query('UPDATE Publishers SET Publisher_Location = ?, Publisher_Contact = ? WHERE Publisher_name = ?', [Publisher_Location, Publisher_Contact, name], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher updated' });
  });
});

// Delete a publisher
router.delete('/:name', (req, res) => {
  const { name } = req.params;
  db.query('DELETE FROM Publishers WHERE Publisher_name = ?', [name], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Publisher deleted' });
  });
});

module.exports = router;
