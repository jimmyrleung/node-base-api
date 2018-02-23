let jwt = require('jsonwebtoken');

module.exports = {
    getSignedToken: function (payload, expiration) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: expiration }, function (err, token) {
                if (!err) {
                    resolve({ token: token });
                }
                else {
                    reject("An error occurred while trying to sign a new token.");
                }
            });
        });
    }
}