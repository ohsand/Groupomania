const mysql = require('mysql');

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'password',
  database : 'socialmedia'
});

module.exports = db;