const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all events
router.get('/', (req, res) => {
  db.query('SELECT * FROM Library_Events', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get an event by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Library_Events WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new event
router.post('/', (req, res) => {
  const { Event_ID, Event_name, Event_Description, Event_date, Event_location, Branch_ID, Category_ID, Librarian_ID } = req.body;
  db.query('INSERT INTO Library_Events (Event_ID, Event_name, Event_Description, Event_date, Event_location, Branch_ID, Category_ID, Librarian_ID) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Event_ID, Event_name, Event_Description, Event_date, Event_location, Branch_ID, Category_ID, Librarian_ID], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event created', id: results.insertId });
  });
});

// Update an event
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Event_name, Event_Description, Event_date, Event_location, Branch_ID, Category_ID, Librarian_ID } = req.body;
  db.query('UPDATE Library_Events SET Event_name = ?, Event_Description = ?, Event_date = ?, Event_location = ?, Branch_ID = ?, Category_ID = ?, Librarian_ID = ? WHERE Event_ID = ?', [Event_name, Event_Description, Event_date, Event_location, Branch_ID, Category_ID, Librarian_ID, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event updated' });
  });
});

// Delete an event
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Library_Events WHERE Event_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event deleted' });
  });
});

module.exports = router;
