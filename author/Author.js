module.exports = class Author {
    constructor(id, name, email, password) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._password = password;
    }

    get id() {
        return this._id;
    };

    set id(id) {
        this._id = id;
    };

    get name() {
        return this._name;
    };

    set name(name) {
        this._name = name;
    };

    get email() {
        return this._email;
    };

    set email(email) {
        this._email = email;
    };

    get password() {
        return this._password;
    };

    set password(password) {
        this._password = password;
    };

    validate() {
        var errors = [];
        if (!this._name) {
            errors.push({ field: "name", message: "The field 'name' is required." });
        }
        if (!this._email) {
            errors.push({ field: "email", message: "The field 'email' is required." });

        }
        if (!this._password) {
            errors.push({ field: "password", message: "The field 'password' is required." });
        }
        return errors;
    };
}