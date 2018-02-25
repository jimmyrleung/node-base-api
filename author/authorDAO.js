const Author = require('./Author');

module.exports = {
    nextId: 4,
    authors: [
        new Author(1, "Albert", "albert@test.com.br", "1a2b3c"),
        new Author(2, "Galen", "galen@test.com.br", "3a2b1c"),
        new Author(3, "John", "john@test.com.br", "abc123")
    ],

    getAll: function () {
        return Promise.resolve([...this.authors]);
    },

    getById: function (id) {
        return Promise.resolve(this.authors.find(author => author.id === parseInt(id)));
    },

    add: function (author) {
        let errors = author.validate();

        if (errors.length > 0) {
            return Promise.reject({ errorList: errors, validationErrors: true });
        };

        author.id = this.nextId;
        this.authors.push(author);
        this.nextId++;
        return Promise.resolve(author.id);
    }
}