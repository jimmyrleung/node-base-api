const jwt = require('jsonwebtoken');

module.exports = {
    getSignedToken: function (payload, expiration) {
        return new Promise((resolve, reject) => {
            jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: expiration }, function (err, token) {
                if (!err) {
                    resolve(token);
                }
                else {
                    console.log(err);
                    reject("An error occurred while trying to sign a new token.");
                }
            });
        });
    },

    getDecodedToken: function (token) {
        return new Promise((resolve, reject) => {
            if (!token) return reject("A token must be provided.");
            jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, token) {
                if (!err) {
                    resolve(token);
                }
                else {
                    console.log(err);
                    reject("Invalid token.");
                }
            });
        });
    }
}