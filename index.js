var app = require('express')();
var bodyParser = require('body-parser');
var authorController = require('./author/authorController');
var bookController = require('./book/bookController');
var photoController = require('./photos/photoController');
var calculationController = require('./calculation/calculationController');

app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.route('/api/authors')
	.get(authorController.getAll)
	.post(authorController.add);

app.route('/api/books')
	.get(bookController.getAllWithAuthors)
	.post(bookController.add);

app.route('/api/calculations')
	.get(calculationController.getAll)
	.post(calculationController.add);

app.route('/api/photos')
	.get(photoController.getAll)
	.post(photoController.add);

app.route('/api/authors/:id')
	.get(authorController.getById);

app.route('/api/books/:id')
	.get(bookController.getById);

app.route('/api/photos/:id')
	.get(photoController.getById);

app.route('/api/calculations/:id')
	.get(calculationController.getById);

app.listen(3002, function () {
	console.log("Server listening on port 3002...");
});

