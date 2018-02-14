// Import the library
//const server = require('server');

// Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');



// Dichiazione framework
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sqlDbfactory = require("knex");
const _ = require("lodash");
const process = require("process");

// Dichairazione variabili
let serverPort = process.env.PORT || 5000;

// start server
app.listen(serverPort, function () {
	console.log("Your app is ready at port " + serverPort);
});