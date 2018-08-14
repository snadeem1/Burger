var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 9000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());