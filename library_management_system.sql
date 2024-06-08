-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2024 at 11:02 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_management_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `Author_ID` int(20) NOT NULL,
  `Author_name` varchar(20) NOT NULL,
  `Nationality` varchar(30) NOT NULL,
  `Biography` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`Author_ID`, `Author_name`, `Nationality`, `Biography`) VALUES
(1, 'Harper Lee', 'American', 'Harper Lee was an American novelist known for her 1960 Pulitzer Prize-winning novel To Kill a Mockingbird.'),
(2, 'J.K. Rowling', 'British', 'J.K. Rowling is a British author, best known for writing the Harry Potter fantasy series.'),
(3, 'Isaac Asimov', 'American', 'Isaac Asimov was an American writer and professor of biochemistry, known for his works of science fiction and popular science.');

-- --------------------------------------------------------

--
-- Table structure for table `bir_books`
--

CREATE TABLE `bir_books` (
  `Book_ISBN` int(11) NOT NULL,
  `Book_Issuer_receiver_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bir_books`
--

INSERT INTO `bir_books` (`Book_ISBN`, `Book_Issuer_receiver_ID`) VALUES
(33333333, 1),
(44444444, 2),
(55555555, 3);

-- --------------------------------------------------------

--
-- Table structure for table `bir_mem`
--

CREATE TABLE `bir_mem` (
  `Book_Issuer_receiver_ID` int(11) NOT NULL,
  `Member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bir_mem`
--

INSERT INTO `bir_mem` (`Book_Issuer_receiver_ID`, `Member_ID`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `Book_ID` int(20) NOT NULL,
  `Book_ISBN` int(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `genre` varchar(80) NOT NULL,
  `Publication_date` date NOT NULL,
  `Shelves_ID` int(11) DEFAULT NULL,
  `Librarian_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`Book_ID`, `Book_ISBN`, `Title`, `genre`, `Publication_date`, `Shelves_ID`, `Librarian_ID`) VALUES
(1, 33333333, 'To Kill a Mockingbird', 'Classic Literature', '1960-07-11', 1, 1),
(3, 44444444, 'Foundation', 'Science Fiction', '1951-05-01', 3, 3),
(2, 55555555, 'Harry Potter and the Philosopher\'s Stone', 'Fantasy', '1997-06-26', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `books_au`
--

CREATE TABLE `books_au` (
  `Book_ISBN` int(11) NOT NULL,
  `Author_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books_au`
--

INSERT INTO `books_au` (`Book_ISBN`, `Author_ID`) VALUES
(33333333, 1),
(44444444, 2),
(55555555, 3);

-- --------------------------------------------------------

--
-- Table structure for table `books_issuer_receiver`
--

CREATE TABLE `books_issuer_receiver` (
  `Book_Issuer_receiver_ID` int(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `designation` varchar(30) NOT NULL,
  `qualification` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books_issuer_receiver`
--

INSERT INTO `books_issuer_receiver` (`Book_Issuer_receiver_ID`, `name`, `designation`, `qualification`) VALUES
(1, 'Sarah Brown', 'Head Librarian', 'MLS'),
(2, 'Michael Johnson', 'Assistant Librarian', 'BA in English'),
(3, 'Emily Clark', 'Cataloging Librarian', 'MA in Library Science');

-- --------------------------------------------------------

--
-- Table structure for table `book_copies`
--

CREATE TABLE `book_copies` (
  `BookCopy_ID` int(20) NOT NULL,
  `Book_ISBN` int(11) DEFAULT NULL,
  `Book_status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book_copies`
--

INSERT INTO `book_copies` (`BookCopy_ID`, `Book_ISBN`, `Book_status`) VALUES
(1, 33333333, 'Available'),
(2, 44444444, 'Checked Out'),
(3, 55555555, 'Available');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `Category_ID` int(20) NOT NULL,
  `Category_name` varchar(20) NOT NULL,
  `Category_description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`Category_ID`, `Category_name`, `Category_description`) VALUES
(1, 'Fiction', 'Includes novels, short stories, and poetry.'),
(2, 'Non-Fiction', 'Includes biographies, self-help, and reference books.'),
(3, 'Science Fiction', 'Includes speculative fiction based on imagined future scientific or technological advances.');

-- --------------------------------------------------------

--
-- Table structure for table `employee_member`
--

CREATE TABLE `employee_member` (
  `Member_ID` int(11) NOT NULL,
  `e_limit` varchar(30) DEFAULT NULL,
  `e_duration` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_member`
--

INSERT INTO `employee_member` (`Member_ID`, `e_limit`, `e_duration`) VALUES
(1, '10', '00:00:01'),
(2, '5', '00:00:06'),
(3, '7', '00:00:09');

-- --------------------------------------------------------

--
-- Table structure for table `event_attendees`
--

CREATE TABLE `event_attendees` (
  `Event_Attendees_ID` int(20) NOT NULL,
  `Event_ID` int(11) DEFAULT NULL,
  `Attendance_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_attendees`
--

INSERT INTO `event_attendees` (`Event_Attendees_ID`, `Event_ID`, `Attendance_date`) VALUES
(1, 1, '2024-06-10'),
(2, 2, '2024-07-15'),
(3, 3, '2024-08-20');

-- --------------------------------------------------------

--
-- Table structure for table `le_au`
--

CREATE TABLE `le_au` (
  `Event_ID` int(11) NOT NULL,
  `Author_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `le_au`
--

INSERT INTO `le_au` (`Event_ID`, `Author_ID`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `le_mem`
--

CREATE TABLE `le_mem` (
  `Member_ID` int(11) NOT NULL,
  `Event_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `le_mem`
--

INSERT INTO `le_mem` (`Member_ID`, `Event_ID`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `librarian`
--

CREATE TABLE `librarian` (
  `Librarian_ID` int(20) NOT NULL,
  `Librarian_name` varchar(50) NOT NULL,
  `Librarian_contact` int(20) DEFAULT NULL,
  `Role` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `librarian`
--

INSERT INTO `librarian` (`Librarian_ID`, `Librarian_name`, `Librarian_contact`, `Role`) VALUES
(1, 'John Doe', 1234567890, 'Head Librarian'),
(2, 'Jane Smith', 2147483647, 'Assistant Librarian'),
(3, 'David Johnson', 2147483647, 'Cataloging Librarian');

-- --------------------------------------------------------

--
-- Table structure for table `library_branches`
--

CREATE TABLE `library_branches` (
  `Branch_ID` int(20) NOT NULL,
  `Branch_name` varchar(30) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Contact_info` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library_branches`
--

INSERT INTO `library_branches` (`Branch_ID`, `Branch_name`, `Address`, `Contact_info`) VALUES
(1, 'Central Library', '123 Main St, Cityville', 1234567890),
(2, 'North Branch', '456 Elm St, Townsville', 2147483647),
(3, 'South Branch', '789 Oak St, Villagetown', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `library_events`
--

CREATE TABLE `library_events` (
  `Event_ID` int(20) NOT NULL,
  `Event_name` varchar(30) NOT NULL,
  `Event_Description` text NOT NULL,
  `Event_date` date NOT NULL,
  `Event_location` varchar(50) NOT NULL,
  `Branch_ID` int(11) DEFAULT NULL,
  `Category_ID` int(11) DEFAULT NULL,
  `Librarian_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library_events`
--

INSERT INTO `library_events` (`Event_ID`, `Event_name`, `Event_Description`, `Event_date`, `Event_location`, `Branch_ID`, `Category_ID`, `Librarian_ID`) VALUES
(1, 'Book Club Meeting', 'Discussing \"To Kill a Mockingbird\"', '2024-06-10', 'Central Library', 1, 1, 1),
(2, 'Author Talk', 'Q&A with J.K. Rowling', '2024-07-15', 'North Branch', 2, 2, 2),
(3, 'Science Fiction Convention', 'Panel discussions and cosplay contest', '2024-08-20', 'South Branch', 3, 3, 3);

-- --------------------------------------------------------

--
-- Table structure for table `library_holiday`
--

CREATE TABLE `library_holiday` (
  `Event_ID` int(11) DEFAULT NULL,
  `Holiday_date` date DEFAULT NULL,
  `Holiday_details` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library_holiday`
--

INSERT INTO `library_holiday` (`Event_ID`, `Holiday_date`, `Holiday_details`) VALUES
(1, '2024-07-04', 'Independence Day - Library Closed'),
(2, '2024-09-02', 'Labor Day - Library Closed'),
(3, '2024-11-11', 'Veterans Day - Library Closed');

-- --------------------------------------------------------

--
-- Table structure for table `library_hours`
--

CREATE TABLE `library_hours` (
  `Event_ID` int(11) DEFAULT NULL,
  `Day` varchar(40) NOT NULL,
  `Opening_time` time DEFAULT NULL,
  `Closing_time` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library_hours`
--

INSERT INTO `library_hours` (`Event_ID`, `Day`, `Opening_time`, `Closing_time`) VALUES
(1, 'Monday', '08:00:00', '18:00:00'),
(2, 'Tuesday', '09:00:00', '19:00:00'),
(3, 'Wednesday', '10:00:00', '20:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `Member_ID` int(20) NOT NULL,
  `Member_name` varchar(50) NOT NULL,
  `Member_Contact` int(20) NOT NULL,
  `Membership_status` varchar(50) NOT NULL,
  `Degree` varchar(30) NOT NULL,
  `Institute` varchar(80) NOT NULL,
  `Year` int(10) NOT NULL,
  `Result` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`Member_ID`, `Member_name`, `Member_Contact`, `Membership_status`, `Degree`, `Institute`, `Year`, `Result`) VALUES
(1, 'Alice Johnson', 1111111111, 'Active', 'Bachelor', 'University A', 2018, 3.8),
(2, 'Bob Smith', 2147483647, 'Active', 'Master', 'University B', 2016, 4),
(3, 'Eve Davis', 2147483647, 'Active', 'PhD', 'University C', 2014, 3.5);

-- --------------------------------------------------------

--
-- Table structure for table `members_degree`
--

CREATE TABLE `members_degree` (
  `Degree` varchar(50) NOT NULL,
  `Member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members_degree`
--

INSERT INTO `members_degree` (`Degree`, `Member_ID`) VALUES
('Bachelor', 1),
('Master', 2),
('PhD', 3);

-- --------------------------------------------------------

--
-- Table structure for table `members_institute`
--

CREATE TABLE `members_institute` (
  `Institute` varchar(100) NOT NULL,
  `Member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members_institute`
--

INSERT INTO `members_institute` (`Institute`, `Member_ID`) VALUES
('University A', 1),
('University B', 2),
('University C', 3);

-- --------------------------------------------------------

--
-- Table structure for table `members_result`
--

CREATE TABLE `members_result` (
  `Result` float NOT NULL,
  `Member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members_result`
--

INSERT INTO `members_result` (`Result`, `Member_ID`) VALUES
(3.8, 1),
(4, 2),
(3.5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `members_year`
--

CREATE TABLE `members_year` (
  `Year` int(20) NOT NULL,
  `Member_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members_year`
--

INSERT INTO `members_year` (`Year`, `Member_ID`) VALUES
(2018, 1),
(2016, 2),
(2014, 3);

-- --------------------------------------------------------

--
-- Table structure for table `proceedings`
--

CREATE TABLE `proceedings` (
  `Proceedings_ID` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Conference` varchar(100) NOT NULL,
  `Venue` varchar(80) NOT NULL,
  `Event_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `proceedings`
--

INSERT INTO `proceedings` (`Proceedings_ID`, `Name`, `Conference`, `Venue`, `Event_ID`) VALUES
(1, 'Proceedings of Book Club Meeting', 'Literary Discussion', 'Central Library Meeting Room', 1),
(2, 'Author Talk with J.K. Rowling', 'Author Q&A', 'North Branch Auditorium', 2),
(3, 'Science Fiction Convention Proceedings', 'Panel Discussions and Cosplay', 'South Branch Convention Center', 3);

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `Publisher_name` varchar(30) NOT NULL,
  `Publisher_Location` varchar(40) NOT NULL,
  `Publisher_Contact` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`Publisher_name`, `Publisher_Location`, `Publisher_Contact`) VALUES
('Asimov Estate', 'Chicago, USA', 2147483647),
('Bloomsbury Publishing', 'London, UK', 2147483647),
('Penguin Random House', 'New York, USA', 1234567890);

-- --------------------------------------------------------

--
-- Table structure for table `pub_cat`
--

CREATE TABLE `pub_cat` (
  `Publisher_name` varchar(30) NOT NULL,
  `Category_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pub_cat`
--

INSERT INTO `pub_cat` (`Publisher_name`, `Category_ID`) VALUES
('Asimov Estate', 3),
('Bloomsbury Publishing', 2),
('Penguin Random House', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pub_le`
--

CREATE TABLE `pub_le` (
  `Publisher_name` varchar(30) NOT NULL,
  `Event_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pub_le`
--

INSERT INTO `pub_le` (`Publisher_name`, `Event_ID`) VALUES
('Asimov Estate', 3),
('Bloomsbury Publishing', 2),
('Penguin Random House', 1);

-- --------------------------------------------------------

--
-- Table structure for table `shelves`
--

CREATE TABLE `shelves` (
  `Shelves_ID` int(30) NOT NULL,
  `location` varchar(40) NOT NULL,
  `type` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shelves`
--

INSERT INTO `shelves` (`Shelves_ID`, `location`, `type`) VALUES
(1, 'Fiction Section, 2nd Floor', 'Wooden Shelves'),
(2, 'Non-Fiction Section, 3rd Floor', 'Metal Shelves'),
(3, 'Science Fiction Section, Basement', 'Glass Shelves');

-- --------------------------------------------------------

--
-- Table structure for table `student_member`
--

CREATE TABLE `student_member` (
  `Member_ID` int(11) NOT NULL,
  `favorites` text,
  `s_limit` varchar(30) DEFAULT NULL,
  `s_duration` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_member`
--

INSERT INTO `student_member` (`Member_ID`, `favorites`, `s_limit`, `s_duration`) VALUES
(1, 'Mystery, Thriller', '5 books', '00:00:01'),
(2, 'Fantasy, Science Fiction', '7 books', '00:00:02'),
(3, 'Romance, Contemporary', '10 books', '00:00:03');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_member`
--

CREATE TABLE `teacher_member` (
  `Member_ID` int(11) NOT NULL,
  `highest_qualifications` varchar(50) DEFAULT NULL,
  `research_area` varchar(30) DEFAULT NULL,
  `teach_limit` varchar(20) DEFAULT NULL,
  `t_duration` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher_member`
--

INSERT INTO `teacher_member` (`Member_ID`, `highest_qualifications`, `research_area`, `teach_limit`, `t_duration`) VALUES
(1, 'PhD in English Literature', 'American Literature', '3 courses', '00:00:01'),
(2, 'Master of Library Science', 'Library Management', '2 courses', '00:00:06'),
(3, 'PhD in Computer Science', 'Artificial Intelligence', '4 courses', '00:00:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`Author_ID`);

--
-- Indexes for table `bir_books`
--
ALTER TABLE `bir_books`
  ADD PRIMARY KEY (`Book_Issuer_receiver_ID`,`Book_ISBN`),
  ADD KEY `Book_ISBN` (`Book_ISBN`);

--
-- Indexes for table `bir_mem`
--
ALTER TABLE `bir_mem`
  ADD PRIMARY KEY (`Member_ID`,`Book_Issuer_receiver_ID`),
  ADD KEY `Book_Issuer_receiver_ID` (`Book_Issuer_receiver_ID`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`Book_ISBN`),
  ADD KEY `Shelves_ID` (`Shelves_ID`),
  ADD KEY `Librarian_ID` (`Librarian_ID`);

--
-- Indexes for table `books_au`
--
ALTER TABLE `books_au`
  ADD PRIMARY KEY (`Book_ISBN`,`Author_ID`),
  ADD KEY `Author_ID` (`Author_ID`);

--
-- Indexes for table `books_issuer_receiver`
--
ALTER TABLE `books_issuer_receiver`
  ADD PRIMARY KEY (`Book_Issuer_receiver_ID`);

--
-- Indexes for table `book_copies`
--
ALTER TABLE `book_copies`
  ADD PRIMARY KEY (`BookCopy_ID`),
  ADD KEY `Book_ISBN` (`Book_ISBN`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Indexes for table `employee_member`
--
ALTER TABLE `employee_member`
  ADD PRIMARY KEY (`Member_ID`);

--
-- Indexes for table `event_attendees`
--
ALTER TABLE `event_attendees`
  ADD PRIMARY KEY (`Event_Attendees_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `le_au`
--
ALTER TABLE `le_au`
  ADD PRIMARY KEY (`Event_ID`,`Author_ID`),
  ADD KEY `Author_ID` (`Author_ID`);

--
-- Indexes for table `le_mem`
--
ALTER TABLE `le_mem`
  ADD PRIMARY KEY (`Member_ID`,`Event_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `librarian`
--
ALTER TABLE `librarian`
  ADD PRIMARY KEY (`Librarian_ID`);

--
-- Indexes for table `library_branches`
--
ALTER TABLE `library_branches`
  ADD PRIMARY KEY (`Branch_ID`);

--
-- Indexes for table `library_events`
--
ALTER TABLE `library_events`
  ADD PRIMARY KEY (`Event_ID`),
  ADD KEY `Branch_ID` (`Branch_ID`),
  ADD KEY `Category_ID` (`Category_ID`),
  ADD KEY `Librarian_ID` (`Librarian_ID`);

--
-- Indexes for table `library_holiday`
--
ALTER TABLE `library_holiday`
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `library_hours`
--
ALTER TABLE `library_hours`
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`Member_ID`);

--
-- Indexes for table `members_degree`
--
ALTER TABLE `members_degree`
  ADD PRIMARY KEY (`Member_ID`,`Degree`);

--
-- Indexes for table `members_institute`
--
ALTER TABLE `members_institute`
  ADD PRIMARY KEY (`Member_ID`,`Institute`);

--
-- Indexes for table `members_result`
--
ALTER TABLE `members_result`
  ADD PRIMARY KEY (`Member_ID`,`Result`);

--
-- Indexes for table `members_year`
--
ALTER TABLE `members_year`
  ADD PRIMARY KEY (`Member_ID`,`Year`);

--
-- Indexes for table `proceedings`
--
ALTER TABLE `proceedings`
  ADD PRIMARY KEY (`Proceedings_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`Publisher_name`);

--
-- Indexes for table `pub_cat`
--
ALTER TABLE `pub_cat`
  ADD PRIMARY KEY (`Publisher_name`,`Category_ID`),
  ADD KEY `Category_ID` (`Category_ID`);

--
-- Indexes for table `pub_le`
--
ALTER TABLE `pub_le`
  ADD PRIMARY KEY (`Publisher_name`,`Event_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `shelves`
--
ALTER TABLE `shelves`
  ADD PRIMARY KEY (`Shelves_ID`);

--
-- Indexes for table `student_member`
--
ALTER TABLE `student_member`
  ADD PRIMARY KEY (`Member_ID`);

--
-- Indexes for table `teacher_member`
--
ALTER TABLE `teacher_member`
  ADD PRIMARY KEY (`Member_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bir_books`
--
ALTER TABLE `bir_books`
  ADD CONSTRAINT `bir_books_ibfk_1` FOREIGN KEY (`Book_ISBN`) REFERENCES `books` (`Book_ISBN`),
  ADD CONSTRAINT `bir_books_ibfk_2` FOREIGN KEY (`Book_Issuer_receiver_ID`) REFERENCES `books_issuer_receiver` (`Book_Issuer_receiver_ID`);

--
-- Constraints for table `bir_mem`
--
ALTER TABLE `bir_mem`
  ADD CONSTRAINT `bir_mem_ibfk_1` FOREIGN KEY (`Book_Issuer_receiver_ID`) REFERENCES `books_issuer_receiver` (`Book_Issuer_receiver_ID`),
  ADD CONSTRAINT `bir_mem_ibfk_2` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`Shelves_ID`) REFERENCES `shelves` (`Shelves_ID`),
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`Librarian_ID`) REFERENCES `librarian` (`Librarian_ID`);

--
-- Constraints for table `books_au`
--
ALTER TABLE `books_au`
  ADD CONSTRAINT `books_au_ibfk_1` FOREIGN KEY (`Book_ISBN`) REFERENCES `books` (`Book_ISBN`),
  ADD CONSTRAINT `books_au_ibfk_2` FOREIGN KEY (`Author_ID`) REFERENCES `authors` (`Author_ID`);

--
-- Constraints for table `book_copies`
--
ALTER TABLE `book_copies`
  ADD CONSTRAINT `book_copies_ibfk_1` FOREIGN KEY (`Book_ISBN`) REFERENCES `books` (`Book_ISBN`);

--
-- Constraints for table `employee_member`
--
ALTER TABLE `employee_member`
  ADD CONSTRAINT `employee_member_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `event_attendees`
--
ALTER TABLE `event_attendees`
  ADD CONSTRAINT `event_attendees_ibfk_1` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `le_au`
--
ALTER TABLE `le_au`
  ADD CONSTRAINT `le_au_ibfk_1` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`),
  ADD CONSTRAINT `le_au_ibfk_2` FOREIGN KEY (`Author_ID`) REFERENCES `authors` (`Author_ID`);

--
-- Constraints for table `le_mem`
--
ALTER TABLE `le_mem`
  ADD CONSTRAINT `le_mem_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`),
  ADD CONSTRAINT `le_mem_ibfk_2` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `library_events`
--
ALTER TABLE `library_events`
  ADD CONSTRAINT `library_events_ibfk_1` FOREIGN KEY (`Branch_ID`) REFERENCES `library_branches` (`Branch_ID`),
  ADD CONSTRAINT `library_events_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `categories` (`Category_ID`),
  ADD CONSTRAINT `library_events_ibfk_3` FOREIGN KEY (`Librarian_ID`) REFERENCES `librarian` (`Librarian_ID`);

--
-- Constraints for table `library_holiday`
--
ALTER TABLE `library_holiday`
  ADD CONSTRAINT `library_holiday_ibfk_1` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `library_hours`
--
ALTER TABLE `library_hours`
  ADD CONSTRAINT `library_hours_ibfk_1` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `members_degree`
--
ALTER TABLE `members_degree`
  ADD CONSTRAINT `members_degree_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `members_institute`
--
ALTER TABLE `members_institute`
  ADD CONSTRAINT `members_institute_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `members_result`
--
ALTER TABLE `members_result`
  ADD CONSTRAINT `members_result_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `members_year`
--
ALTER TABLE `members_year`
  ADD CONSTRAINT `members_year_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `proceedings`
--
ALTER TABLE `proceedings`
  ADD CONSTRAINT `proceedings_ibfk_1` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `pub_cat`
--
ALTER TABLE `pub_cat`
  ADD CONSTRAINT `pub_cat_ibfk_1` FOREIGN KEY (`Publisher_name`) REFERENCES `publishers` (`Publisher_name`),
  ADD CONSTRAINT `pub_cat_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `categories` (`Category_ID`);

--
-- Constraints for table `pub_le`
--
ALTER TABLE `pub_le`
  ADD CONSTRAINT `pub_le_ibfk_1` FOREIGN KEY (`Publisher_name`) REFERENCES `publishers` (`Publisher_name`),
  ADD CONSTRAINT `pub_le_ibfk_2` FOREIGN KEY (`Event_ID`) REFERENCES `library_events` (`Event_ID`);

--
-- Constraints for table `student_member`
--
ALTER TABLE `student_member`
  ADD CONSTRAINT `student_member_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);

--
-- Constraints for table `teacher_member`
--
ALTER TABLE `teacher_member`
  ADD CONSTRAINT `teacher_member_ibfk_1` FOREIGN KEY (`Member_ID`) REFERENCES `members` (`Member_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
