const bookDAO = require('./bookDAO');
const Book = require('./Book');

module.exports = {
    getAllWithAuthors: function (req, res) {
        bookDAO.getAllWithAuthors()
            .then(books => res.status(200).json(books))
            .catch(error => 
                res.status(500).json()
            );
    },

    add: function (req, res) {
        bookDAO.add(new Book(null, req.body.authorId, req.body.title, req.body.price))
            .then(bookId => res.status(200).json({ created: bookId }))
            .catch(error => res.status(500).json());
    },

    getById: function (req, res) {
        bookDAO.getById(req.params.id)
            .then(book => res.status(200).json(book))
            .catch(error => res.status(500).json());
    }
};