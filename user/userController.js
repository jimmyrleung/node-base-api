let userDAO = require('./userDAO');
let User = require('./User');

module.exports = {
    getAll: function (req, res) {
        userDAO.getAll()
            .then(users => res.status(200).json(users))
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    add: function (req, res) {
        userDAO.add(new User(null, req.body.username, req.body.password))
            .then(userId => res.status(200).json({ created: userId }))
            .catch(err => err.validationErrors ?
                res.status(400).json({ errors: err.errorList }) :
                res.status(500).json({ error: err })
            );
    },

    getById: function (req, res) {
        userDAO.getById(req.params.id)
            .then(user => res.status(200).json(user))
            .catch(errors => res.status(500).json({ errors: errors }));
    }
};