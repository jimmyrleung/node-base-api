let authorDAO = require('./authorDAO');
let Author = require('./Author');

module.exports = {
    getAll: function (req, res) {
        authorDAO.getAll()
            .then(authors => res.status(200).json(authors))
            .catch(error => res.status(500).json());
    },

    add: function (req, res) {
        authorDAO.add(new Author(null, req.body.name, req.body.email, req.body.password))
            .then(authorId => res.status(200).json({ created: authorId }))
            .catch(error => res.status(500).json());
    },

    getById: function (req, res) {
        authorDAO.getById(req.params.id)
            .then(author => res.status(200).json(author))
            .catch(error => res.status(500).json());
    }
};