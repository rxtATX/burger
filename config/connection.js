var mysql = require("mysql");
var passroute = require("../keys.js");
var passcode = passroute.passcode;
var PASSWORD;

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: (PASSWORD || passcode),
	database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
