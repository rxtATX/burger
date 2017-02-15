var express = require("express");

var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(result) {
            callback(result);
        });
    },
    create: function(objColumnVals, values, callback) {
        orm.create("burgers", values, function(result) {
            callback(result);
        });
    },
    update: function(objColumnVals, condition, callback) {
        orm.update("burgers", condition, function(result) {
            callback(result);
        });
    },
    delete: function(objColumnVals, condition, callback) {
        orm.delete("burgers", condition, function(result) {
            callback(result);
            console.log("second: " + result);
        });
    }
};

module.exports = burger;