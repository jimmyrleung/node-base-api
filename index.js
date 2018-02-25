const app = require('express')();
const bodyParser = require('body-parser');
const routeLoader = require("./routes/routeLoader");

const authorization = require("./middlewares/authorization");

// Add any payload to req.body
app.use(bodyParser.json());

if (!process.env.JWT_SECRET_KEY) {
	throw new Error("JWT Secret Key must set as an environment variable.")
}

// Cors middleware
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});

// Options request handler middleware
app.use(function (req, res, next) {
	// If it's a browser "OPTIONS" request, return status code 200 (server alive)
	return (req.method === "OPTIONS") ? res.status(200).json() : next();
});

// loadUserInfo middleware
app.use("/*", authorization.loadUserInfo);

// Load routes into express
routeLoader.load(app);


app.listen(3002, function () {
	console.log("Server listening on port 3002...");
});

