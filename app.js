"use-strict"

// support files
require("./firebaseAuth.js")
var Options = require("./router.js")

// NPM Packages
var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var Firebase = require("firebase");

// port
var port = process.env.PORT || 8080;

// I think this is necessary to parse the JSON data I'm recieving
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//express app serves static files located in the public directory
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res){
  res.send("index.html");
});

app.listen(port, function(){
  console.log("Frontend server running on " + port)
});

