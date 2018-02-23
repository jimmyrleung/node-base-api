let User = require('./User');

module.exports = {
    nextId: 4,
    users: [
        new User(1, "jimmyrl", "abc123"),
        new User(2, "georgecm", "abc123"),
        new User(3, "drakejosh", "abc123")
    ],

    getAll: function () {
        return Promise.resolve([...this.users]);
    },

    getById: function (id) {
        return Promise.resolve(this.users.find(user => user.id === parseInt(id)));
    },

    getByUsername: function (username) {
        return Promise.resolve(this.users.find(user => user.username === username));
    },

    add: function (user) {
        let errors = user.validate();

        if (errors.length > 0) {
            return Promise.reject({ errorList: errors, validationErrors: true });
        };

        user.id = this.nextId;
        this.users.push(user);
        this.nextId++;
        return Promise.resolve(user.id);
    }
}