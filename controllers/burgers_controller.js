var express = require("express");
var app = express();

var burger = require("../models/burger.js");
var functions = burger.action;

exports.getBurger = app.get("/", function(req, res) {
    functions("select", res);
});

exports.postBurger = app.post("/", function(req, res) {
	functions("insert", res);
});
exports.putBurger = app.put("/", function(req, res) {
	functions("update", res);
});