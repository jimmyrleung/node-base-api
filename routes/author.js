const authorController = require('../author/authorController');

module.exports = function (express) {
    express.route('/api/authors')
        .get(authorController.getAll)
        .post(authorController.add);

    express.route('/api/authors/:id')
        .get(authorController.getById);
}