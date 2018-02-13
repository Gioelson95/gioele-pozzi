// Import the library
const server = require('server');
var http = require('http');

// Launch the server to always answer "Hello world"
server(ctx => 'Hello world!');