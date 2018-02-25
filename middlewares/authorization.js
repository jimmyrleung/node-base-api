const jwt = require("../helpers/jwt-manager");
const publicRoutes = [
    '/api/login'
];

module.exports = {
    loadUserInfo: function (req, res, next) {
        if (publicRoutes.includes(req.originalUrl)) return next();
        if (!req.headers.authorization) {
            return res.status(401).json({ message: `The resource ${req.originalUrl} requires an authorization header.` })
        }
        else {
            jwt.getDecodedToken(req.headers.authorization)
                .then(decoded => {
                    req.user = decoded;
                    next();
                })
                .catch(error => res.status(401).json(err));
        }
    }
}
