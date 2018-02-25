const authenticationRoutes = require("./authentication");
const authorRoutes = require("./author");
const bookRoutes = require("./book");
const calculationRoutes = require("./calculation");
const photoRoutes = require("./photo");

module.exports = {
    load: function (express) {
        authenticationRoutes(express);
        authorRoutes(express);
        bookRoutes(express);
        calculationRoutes(express);
        photoRoutes(express);
    }
}