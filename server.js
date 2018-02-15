// Import the library
//const server = require('server');

// Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');


// SERVER DA HYP
const express = require("express");
const app = express();

app.use(express.static(__dirname));


// Dichairazione variabili
let serverPort = process.env.PORT || 5000;


// start server
app.listen(serverPort, function () {
	console.log("Your app is ready at port " + serverPort);
});
