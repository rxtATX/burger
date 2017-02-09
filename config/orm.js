var sqlDatabase = require("./connection.js");

exports.functions = {

    selectAll: function() {
        sqlDatabase.query("SELECT * FROM burgers", function(err, res) {
            if (err) throw err;
            res.render("index", {burgers: res});
        });
    },

    insertOne: function() {
        sqlDatabase.query("INSERT INTO burgers VALUE ?", [req.body.burgers], function(err, res) {
            if (err) {
                throw err;
            }
        

        res.redirect("/");
        });
    },

    updateOne: function() {
        sqlDatabase.query("UPDATE burgers SET ? where id = ?", [req.body.burgers, req.body.id], function(err, res) {
        if (err) {
            throw err;
        }

        res.redirect("/");
        });
    }
};