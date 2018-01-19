module.exports = class Book {
    constructor(id, authorId, title, price) {
        this._id = id;
        this._authorId = authorId;
        this._title = title;
        this._price = price;

        this._author = null;
    }

    get id() {
        return this._id;
    };

    set id(id) {
        this._id = id;
    };

    get authorId() {
        return this._authorId;
    };

    set authorId(authorId) {
        this._authorId = authorId;
    };

    get title() {
        return this._price;
    };

    set title(title) {
        this._title = title;
    };

    get price() {
        return this._price;
    };

    set price(price) {
        this._price = price;
    };

    get author() {
        return this._author;
    };

    set author(author) {
        this._author = author;
    };

    validate() {
        let errors = [];
        if (!this._title) {
            errors.push({ field: "title", message: "The field 'title' is required." });
        }
        if (!this._authorId) {
            errors.push({ field: "autorId", message: "The field 'authorId' is required." });

        }
        if (!this._price) {
            errors.push({ field: "price", message: "The field 'price' is required." });
        }
        return errors;
    }
}