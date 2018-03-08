const jwt = require("../helpers/jwt-manager");
const publicRoutes = [
    '/api/login'
];

module.exports = {
    loadUserInfo: function (req, res, next) {
        req.user = { id: 1, username: "jimmyrl", password: "abc123" };
        next();
    }
}
