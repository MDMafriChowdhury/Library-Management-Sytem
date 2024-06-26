const express = require('express');
const router = express.Router();

const branches = require('./routes/branches');
const categories = require('./routes/categories');
const librarians = require('./routes/librarians');
const events = require('./routes/events');
const members = require('./routes/members');
const authors = require('./routes/authors');
const eventAttendees = require('./routes/event_attendees');
const libraryHours = require('./routes/library_hours');
const libraryHolidays = require('./routes/library_holidays');
const proceedings = require('./routes/proceedings');
const publishers = require('./routes/publishers');
const shelves = require('./routes/shelves');
const books = require('./routes/books');
const bookIssuerReceiver = require('./routes/book_issuer_receiver');
const bookCopies = require('./routes/book_copies');
const employeeMember = require('./routes/employee_member');
const teacherMember = require('./routes/teacher_member');
const studentMember = require('./routes/student_member');
const leAu = require('./routes/le_au');
const leMem = require('./routes/le_mem');
const booksAu = require('./routes/books_au');
const birMem = require('./routes/bir_mem');
const pubCat = require('./routes/pub_cat');
const birBooks = require('./routes/bir_books');
const pubLe = require('./routes/pub_le');
const membersDegree = require('./routes/members_degree');
const membersInstitute = require('./routes/members_institute');
const membersYear = require('./routes/members_year');
const membersResult = require('./routes/members_result');

router.use('/branches', branches);
router.use('/categories', categories);
router.use('/librarians', librarians);
router.use('/events', events);
router.use('/members', members);
router.use('/authors', authors);
router.use('/event_attendees', eventAttendees);
router.use('/library_hours', libraryHours);
router.use('/library_holidays', libraryHolidays);
router.use('/proceedings', proceedings);
router.use('/publishers', publishers);
router.use('/shelves', shelves);
router.use('/books', books);
router.use('/book_issuer_receiver', bookIssuerReceiver);
router.use('/book_copies', bookCopies);
router.use('/employee_member', employeeMember);
router.use('/teacher_member', teacherMember);
router.use('/student_member', studentMember);
router.use('/le_au', leAu);
router.use('/le_mem', leMem);
router.use('/books_au', booksAu);
router.use('/bir_mem', birMem);
router.use('/pub_cat', pubCat);
router.use('/bir_books', birBooks);
router.use('/pub_le', pubLe);
router.use('/members_degree', membersDegree);
router.use('/members_institute', membersInstitute);
router.use('/members_year', membersYear);
router.use('/members_result', membersResult);

module.exports = router;
