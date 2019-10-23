const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//include html route file, with express app parameter passed into module.exports function
//NOTE: api routes need to be included first because they pull data to display in html pages
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})