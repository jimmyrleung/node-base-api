const photoDAO = require('./photoDAO');
const Photo = require('./Photo');

module.exports = {
    getUserTimeline: function (req, res) {
        photoDAO.getUserTimeline(req.user.username, req.query.p || null)
            .then(photos => res.status(200).json(photos))
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    getAllByUsername: function (req, res) {
        photoDAO.getAllByUsername(req.params.username)
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
    },

    getLikers: function (req, res) {
        photoDAO.getLikersById(req.params.id)
            .then(likers => {
                res.status(200).json(likers)
            })
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    like: function (req, res) {
        photoDAO.toggleLike(req.params.id, req.user)
            .then(photoIsLiked => res.status(200).json(photoIsLiked))
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    getComments: function (req, res) {
        photoDAO.getComments(req.params.id)
            .then(comments => {
                res.status(200).json(comments)
            })
            .catch(errors => res.status(500).json({ errors: errors }));
    },

    addComment: function (req, res) {
        photoDAO.addComment(req.params.id, req.user, req.body.comment)
            .then(comments => res.status(200).json(comments))
            .catch(errors => res.status(500).json({ errors: errors }));
    }
};