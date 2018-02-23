module.exports = class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    validate() {
        var errors = [];
        if (!this.username) {
            errors.push({ field: "username", message: "The field 'username' is required." });
        }

        if (!this.password) {
            errors.push({ field: "password", message: "The field 'password' is required." });
        }
    };
}