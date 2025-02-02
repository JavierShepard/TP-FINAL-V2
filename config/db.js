const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});
console.log('Debug - Database credentials:');
console.log('Host:', process.env.MYSQL_ADDON_HOST);
console.log('User:', process.env.MYSQL_ADDON_USER);
console.log('Database:', process.env.MYSQL_ADDON_DB);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;
