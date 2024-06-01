const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '66.29.146.85',
  user: 'litvitapanel_mafri',
  password: 'niloy019@',
  database: 'litvitapanel_library_management',
  port: 3306
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

module.exports = connection;
