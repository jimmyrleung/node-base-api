module.exports = {
    nextId: 1,
    calculations: [],

    getAll: function () {
        return Promise.resolve([...this.calculations]);
    },

    getById: function (id) {
        return Promise.resolve(this.calculations.find(calculation => calculation.id === parseInt(id)));
    },

    add: function (calculation) {
        calculation.id = this.nextId;
        this.calculations.push(calculation);
        this.nextId++;
        return Promise.resolve(calculation.id);
    }
}