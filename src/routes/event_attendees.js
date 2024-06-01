const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all event attendees
router.get('/', (req, res) => {
  db.query('SELECT * FROM Event_Attendees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get event attendees by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Event_Attendees WHERE Event_Attendees_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Create a new event attendee
router.post('/', (req, res) => {
  const { Event_Attendees_ID, Event_ID, Attendance_date } = req.body;
  db.query('INSERT INTO Event_Attendees (Event_Attendees_ID, Event_ID, Attendance_date) VALUES (?, ?, ?)', [Event_Attendees_ID, Event_ID, Attendance_date], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event attendee created', id: results.insertId });
  });
});

// Update an event attendee
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { Event_ID, Attendance_date } = req.body;
  db.query('UPDATE Event_Attendees SET Event_ID = ?, Attendance_date = ? WHERE Event_Attendees_ID = ?', [Event_ID, Attendance_date, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event attendee updated' });
  });
});

// Delete an event attendee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Event_Attendees WHERE Event_Attendees_ID = ?', [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Event attendee deleted' });
  });
});

module.exports = router;
