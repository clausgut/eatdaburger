var express = require("express");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Set Handlebars as the view engine
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./cont/burgers_controller.js');

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost: " + PORT);
});