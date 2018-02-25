const authorDAO = require('./authorDAO');
const Author = require('./Author');

module.exports = {
    getAll: function (req, res) {
        authorDAO.getAll()
            .then(authors => res.status(200).json(authors))
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    add: function (req, res) {
        authorDAO.add(new Author(null, req.body.name, req.body.email, req.body.password))
            .then(authorId => res.status(200).json({ created: authorId }))
            .catch(err => err.validationErrors ?
                res.status(400).json({ errors: err.errorList }) :
                res.status(500).json({ error: err })
            );
    },

    getById: function (req, res) {
        authorDAO.getById(req.params.id)
            .then(author => res.status(200).json(author))
            .catch(errors => res.status(500).json({ errors: errors }));
    }
};