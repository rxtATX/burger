var express = require("express");
var app = express();

var burger = require("../models/burger.js");
var functions = burger.action;

// exports.
getBurger = app.get("/", function(req, res) {
    
});

// exports.
postBurger = app.post("/", function(req, res) {
	var newBurger = req.body;
	burger("insert", res, newBurger.burger_name);
});
// exports.
putBurger = app.put("/", function(req, res) {
	res.json(burgers);
    res.redirect("/");
});
