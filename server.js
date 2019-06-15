var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({ type: 'text/html' }));

//enables api routes to connect//
require("./app/routing/api-routes.js")(app)
require("./app/routing/html-routes.js")(app)
// enables html routes to connect to server //

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});