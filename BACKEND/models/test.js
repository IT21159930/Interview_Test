const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: '1234k', 
  database: 'toyota_interview_test',
});

module.exports = pool;




