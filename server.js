// Import the library
//const server = require('server');

// Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');

var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Context-Type': 'text/plain',
	});
	response.end('Hello World!');
}).listen(5000);

console.log('server running at port 5000');
