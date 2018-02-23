let photoDAO = require('./photoDAO');
let Photo = require('./Photo');

module.exports = {
    getAll: function (req, res) {
        photoDAO.getAll()
            .then(photos => res.status(200).json(photos))
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    add: function (req, res) {
        photoDAO.add(new Photo(null, req.body.name, req.body.email, req.body.password, new Date(), []))
            .then(photoId => res.status(200).json({ created: photoId }))
            .catch(err => err.validationErrors ?
                res.status(400).json({ errors: err.errorList }) :
                res.status(500).json({ error: err })
            );
    },

    getById: function (req, res) {
        photoDAO.getById(req.params.id)
            .then(photo => res.status(200).json(photo))
            .catch(errors => res.status(500).json({ errors: errors }));
    }
};