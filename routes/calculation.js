const calculationController = require('../calculation/calculationController');

module.exports = function (express) {
    express.route('/api/calculations')
        .get(calculationController.getAll)
        .post(calculationController.add);

    express.route('/api/calculations/:id')
        .get(calculationController.getById);
}