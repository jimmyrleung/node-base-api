const calculationDAO = require('./calculationDAO');
const Calculation = require('./Calculation');

module.exports = {
    getAll: function (req, res) {
        calculationDAO.getAll()
            .then(calculations => res.status(200).json(calculations))
            .catch(error => res.status(500).json());
    },

    add: function (req, res) {
        calculationDAO.add(new Calculation(req.body._hourlyWage, req.body._workedHours))
            .then(calculationId => res.status(200).json({ created: calculationId }))
            .catch(error => res.status(500).json());
    },

    getById: function (req, res) {
        calculationDAO.getById(req.params.id)
            .then(calculation => res.status(200).json(calculation))
            .catch(error => res.status(500).json());
    }
};