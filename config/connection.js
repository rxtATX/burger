var mysql = require("mysql");
var passcode = require("../keys.js");
var connection = passcode.connection;

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;
