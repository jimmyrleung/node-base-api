const photoController = require('../photo/photoController');

module.exports = function (express) {
    express.route('/api/photos')
        .get(photoController.getUserTimeline)
        .post(photoController.add);

    express.route('/api/photos/:username')
        .get(photoController.getAllByUsername);

    express.route('/api/photos/:id')
        .get(photoController.getById);
}