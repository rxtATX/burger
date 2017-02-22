var mysql = require("mysql");
var passcode = require("../keys.js");
var connection = passcode.connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWS_URL);
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection thread: " + connection.threadId);
});

module.exports = connection;
