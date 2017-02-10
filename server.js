var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");

var PORT = 5000;

var controllers = require('./controllers/burgers_controller.js');
var router = express.Router();

app.use(express.static(__dirname + "/public"));

//Parses the contents of the web app to ensure it's easier to use.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", controllers.getBurger);
app.use("/", controllers.postBurger);
app.use("/", controllers.putBurger);

app.listen(process.env.PORT || 5000, function() {
    console.log("App listening on PORT " + PORT);
});

// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

// var app = express();
// var port = 3000;

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));

// // Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// app.listen(port);
