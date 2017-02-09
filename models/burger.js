var express = require("express");
var app = express();

var orm = require("../config/orm.js");
functions = orm.functions;

exports.action = function(req, res, more) {
    switch (req) {
        case "select":
            functions.selectAll();
            break;
        case "insert":
            functions.insertOne(res, more);
            break;
        case "update":
            functions.updateOne(res, more);
            break;
    }
};