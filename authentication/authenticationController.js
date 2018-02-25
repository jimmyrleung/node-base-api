const authenticationServices = require('./authenticationServices');

module.exports = {
    login: function (req, res) {
        authenticationServices.login(req.body.username, req.body.password)
            .then(result => {
                res.status(200).json({ token: result.token })
            })
            .catch(error => {
                res.status(error.statusCode || 500).json({ error: error.errorMessage || error })
            });
    }
};