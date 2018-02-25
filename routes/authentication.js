const authenticationController = require('../authentication/authenticationController');

module.exports = function (express) {
    express.route('/api/login')
        .post(authenticationController.login);
}