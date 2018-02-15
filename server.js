// Import the library
//const server = require('server');

// Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	//Open a file on the server and return it's content:
	fs.readFile('index.html', function (err, data) {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write(data);
		return res.end();
	});
}).listen(5000);

console.log('run server on port 5000');

