const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'admin',        // MYSQL USERNAME
    password : 'adminadmin',    // MYSQL PASSWORD
    database : 'registrationdb'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;