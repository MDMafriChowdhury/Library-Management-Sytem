const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all proceedings
router.get('/', (req, res) => {
  db.query('SELECT * FROM Proceedings', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get proceedings by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Proceedings WHERE Proceedings_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new proceeding
router.post('/', (req, res) => {
  const { Proceedings_ID, Name, Conference, Venue, Event_ID } = req.body;
  db.query('INSERT INTO Proceedings (Proceedings_ID, Name, Conference, Venue, Event_ID) VALUES (?, ?, ?, ?, ?)', [Proceedings_ID, Name, Conference, Venue, Event_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Proceeding created', id: results.insertId });
  });
});

// Update a proceeding
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Name, Conference, Venue, Event_ID } = req.body;
  db.query('UPDATE Proceedings SET Name = ?, Conference = ?, Venue = ?, Event_ID = ? WHERE Proceedings_ID = ?', [Name, Conference, Venue, Event_ID, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Proceeding updated' });
  });
});

// Delete a proceeding
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Proceedings WHERE Proceedings_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Proceeding deleted' });
  });
});

module.exports = router;
