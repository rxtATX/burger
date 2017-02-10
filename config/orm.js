var server = require("../server.js");
var sqlDatabase = require("./connection.js");

exports.functions = {

    selectAll: function(res) {
        sqlDatabase.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            res.render("index", {burgers: data});
        });
    },

    insertOne: function(res) {
        sqlDatabase.query("INSERT INTO burgers VALUE ?", [req.body.burger_name], function(err, data) {
            if (err) {
                throw err;
            }
            console.log(req.body.burger_name);
        res.redirect("/");
        });
    },

    updateOne: function(res) {
        sqlDatabase.query("UPDATE burgers SET ? where id = ?", [req.body.burger_name, req.body.id], function(err, data) {
        if (err) {
            throw err;
        }
        res.render("index", {burgers: data});
        console.log(req.body.burger_name);
        console.log(req.body.id);
        res.redirect("/");
        });
    }
};