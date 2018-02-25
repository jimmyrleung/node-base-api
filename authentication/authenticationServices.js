const jwt = require('../helpers/jwt-manager');
const userDAO = require('../user/userDAO');

module.exports = {
    login: function (username, password) {
        return new Promise((resolve, reject) => {
            return userDAO.getByUsername(username)
                .then(user => {
                    if (user) {
                        // TODO: encrypted password
                        if (user.password === password) {
                            // The payload must be a plain object
                            return jwt.getSignedToken({ id: user.id, username: user.username, password: user.password }, "1d");
                        }
                        else {
                            return reject({ errorMessage: "Wrong username or password.", statusCode: 401 });
                        }
                    }
                    else {
                        return reject({ errorMessage: "User not found.", statusCode: 404 });
                    }
                })
                .then(signedToken => {
                    resolve({ token: signedToken });
                })
                .catch(error => reject({ errorMessage: "An internal error occurred while trying to login." }));
        })
    }
}