var server = require("../server.js");
var sqlDatabase = require("./connection.js");

exports.functions = {

    selectAll: function(req, res) {
        sqlDatabase.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            res.render("index", {burgers: data});
        });
    },

    insertOne: function(req, res) {
        sqlDatabase.query("INSERT INTO burgers VALUES ?", [req.body.burger_name], function(err, data) {
            if (err) {
                throw err;
            }
        res.redirect("/");
        });
    },

    updateOne: function(req, res) {
        sqlDatabase.query("UPDATE burgers SET ? WHERE id = ?", [req.body.burger_name, req.body.id], function(err, data) {
        if (err) {
            throw err;
        }
        // res.render("index", {burgers: data});
        res.redirect("/");
        });
    }
};