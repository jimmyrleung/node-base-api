const Book = require('./Book');
const authorDAO = require('../author/AuthorDAO');

module.exports = {
    nextId: 4,
    books: [
        new Book(1, 1, "WebApps with ReactJS", 49.90),
        new Book(2, 1, "Hybrid Applications with Ionic", 39.90),
        new Book(3, 1, "ASP.NET: MVC5, WebAPI and .NET Core.", 39.90)
    ],

    getAll: function () {
        return Promise.resolve([...this.books]);
    },

    getAllWithAuthors: function () {
        return Promise.all(this.books.map(book => authorDAO.getById(book.authorId)))
            .then(authors => {
                let books = [];
                this.books.forEach((book, i) => {
                    book.author = authors[i];
                    books.push(book);
                });
                return Promise.resolve(books);
            });
    },

    getById: function (id) {
        let book = this.books.find(book => book.id === parseInt(id));
        return Promise.resolve(book);
    },

    add: function (book) {
        errors = book.validate();
        if (errors.length > 0) {
            return Promise.reject(errors);
        };

        book.id = this.nextId;
        this.books.push(book);
        this.nextId++;
        return Promise.resolve(book.id);
    }
}