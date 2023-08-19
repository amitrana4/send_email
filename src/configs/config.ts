'use strict';
import mysql from 'mysql';
//local mysql db connection
export const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'qaz12345',
  database : 'email_service_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});