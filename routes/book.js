const bookController = require('../book/bookController');

module.exports = function (express) {
    express.route('/api/books')
        .get(bookController.getAllWithAuthors)
        .post(bookController.add);

    express.route('/api/books/:id')
        .get(bookController.getById);
}