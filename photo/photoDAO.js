const Photo = require('./Photo');

module.exports = {
    nextId: 4,
    photos: [
        new Photo(1, "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_yoshi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png", "Yoshi, my favorite one!", "jimmyrl", new Date(2018, 1, 21, 22, 53, 12), ["georgecm"]),
        new Photo(2, "https://s3.zerochan.net/Link.240.1060217.jpg", "I'm not Zelda! x.x", "jimmyrl", new Date(2018, 1, 04, 12, 11, 26), ["georgecm"]),
        new Photo(3, "https://i.ytimg.com/vi/GBKqxbKKXzk/hqdefault.jpg", "Luffy Picking his nose xD", "georgecm", new Date(2018, 1, 12, 13, 56, 11), ["jimmyrl"])
    ],

    getAll: function () {
        return Promise.resolve([...this.photos]);
    },

    getById: function (id) {
        return Promise.resolve(this.photos.find(photo => photo.id === parseInt(id)));
    },

    getLikersById: function (id) {
        let photo = this.photos.find(photo => photo.id === parseInt(id));
        return Promise.resolve({ likers: photo.likers });
    },

    getUserTimeline: function (username) {
        return Promise.resolve(
            this.photos
                .filter(photo => photo.username !== username) // Todas as fotos que não são do próprio usuário
                .map(photo => { photo.isLiked = photo.likers.includes(username); return photo; }) // Verifica se o usuário curtiu ou não
        );
    },

    getAllByUsername: function (username) {
        return Promise.resolve(
            this.photos
                .filter(photo => photo.username === username)
                .map(photo => { photo.isLiked = photo.likers.includes(username); return photo; })
        );
    },

    add: function (photo) {
        photo.id = this.nextId;
        this.photos.push(photo);
        this.nextId++;
        return Promise.resolve(photo.id);
    },

    toggleLike: function (photoId, user) {
        let photo = this.photos.find(p => p.id === parseInt(photoId));
        if (!photo) {
            return Promise.reject({ msg: "Photo not found." });
        }
        photo.likers.includes(user.username) ?
            photo.likers.splice(photo.likers.indexOf(user.username), 1) :
            photo.likers.push(user.username);

        photo.isLiked = photo.likers.includes(user.username)

        return Promise.resolve({ isLiked: photo.isLiked });
    }
}