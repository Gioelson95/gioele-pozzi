// Import the library
//const server = require('server');
const app = express();

let serverPort = process.env.PORT || 5000;

// start server
app.listen(serverPort, function () {
	console.log("Your app is ready at port " + serverPort);
});

// Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');