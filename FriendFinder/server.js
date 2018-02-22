//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

//requirements packages
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
var urlencodParser = bodyParser.urlencoded({ extended: true})
var jsonParser = bodyParser.json()

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// routes to api and html
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//app that listen to a specific port, along with a callback 
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});