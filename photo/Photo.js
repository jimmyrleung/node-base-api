module.exports = class Photo {
    constructor(id, url, description, username, date, likers, comments) {
        this.id = id;
        this.url = url;
        this.description = description;
        this.username = username;
        this.date = date.toLocaleString();
        this.likers = likers;
        this.comments = comments;
        this.isLiked = null;
    }
}