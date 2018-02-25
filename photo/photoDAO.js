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

    getUserTimeline: function (username) {
        return Promise.resolve(this.photos.filter(photo => photo.username !== username));
    },

    getAllByUsername: function (username) {
        return Promise.resolve(this.photos.filter(photo => photo.username === username));
    },

    add: function (photo) {
        photo.id = this.nextId;
        this.photos.push(photo);
        this.nextId++;
        return Promise.resolve(photo.id);
    }
}