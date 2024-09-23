import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: '51.195.218.51',
  user: 'Maxou',
  password: 'P@ssw0rd',
  database: 'FlashService',
});

export default connection;
