var express = require("express");
var app = express();

var orm = require("../config/orm.js");
functions = orm.functions;

exports.action = function(req, res, more) {
    switch (req) {
        case "select":
            functions.selectAll(req, res);
            break;
        case "insert":
            functions.insertOne(req, res, more);
            break;
        case "update":
            functions.updateOne(req, res, more);
            break;
    }
};