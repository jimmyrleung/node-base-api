const Photo = require('./Photo');

module.exports = {
    nextId: 5,
    photos: [
        new Photo(1, "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/Masthead_yoshi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png",
            "Yoshi, my favorite one!", "jimmyrl", new Date(2018, 1, 21, 22, 53, 12), ["georgecm"], [{ username: "georgecm", text: "He's cute but I prefer Luigi." }]),
        new Photo(2, "https://s3.zerochan.net/Link.240.1060217.jpg",
            "I'm not Zelda! x.x", "jimmyrl", new Date(2018, 1, 04, 12, 11, 26), ["georgecm"], []),
        new Photo(3, "https://i.ytimg.com/vi/GBKqxbKKXzk/hqdefault.jpg",
            "Luffy Picking his nose xD", "georgecm", new Date(2018, 1, 12, 13, 56, 11), ["jimmyrl"], [{ username: "jimmyrl", text: "Eww! Haha xD" }]),
        new Photo(4, "http://cdn1.clevver.com/wp-content/uploads/2015/01/drake-josh-fun-facts-trivia-feature.jpg",
            "My favorite TV Show!", "drakejosh", new Date(2018, 1, 27, 21, 30, 11), ["jimmyrl"], [{ username: "jimmyrl", text: "Miss this TV Show!" }])
    ],

    // Photos
    getAll: function () {
        return Promise.resolve([...this.photos]);
    },

    getById: function (id) {
        return Promise.resolve(this.photos.find(photo => photo.id === parseInt(id)));
    },

    getUserTimeline: function (username, p) {
        return p ?
            Promise.resolve(
                this.photos
                    .filter(photo => photo.username !== username && photo.username.includes(p)) // Todas as fotos que não são do próprio usuário
                    .map(photo => { photo.isLiked = photo.likers.includes(username); return photo; }) // Verifica se o usuário curtiu ou não
            ) :
            Promise.resolve(
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

    // Likes and Likers
    getLikersById: function (id) {
        let photo = this.photos.find(photo => photo.id === parseInt(id));
        return Promise.resolve({ likers: photo.likers });
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

        return Promise.resolve({ isLiked: photo.isLiked, likers: photo.likers });
    },

    // Comments
    getComments: function (id) {
        let photo = this.photos.find(photo => photo.id === parseInt(id));
        return Promise.resolve({ comments: photo.comments });
    },

    addComment: function (id, user, comment) {
        let photo = this.photos.find(photo => photo.id === parseInt(id));
        photo.comments.push({ username: user.username, text: comment });
        return Promise.resolve({ comments: photo.comments });
    }
}