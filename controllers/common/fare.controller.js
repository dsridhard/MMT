const { Fare } = require('../../models');


exports.create = async (req, res) => {
    try {
        const { module_type, module_id, class_type, base_fare, taxes, total_fare, currency, available_seats, last_updated } = req.body;
        const fare = await Fare.create({
            module_type, module_id, class_type, base_fare, taxes, total_fare, currency, available_seats, last_updated
        });
        res.status(201).json(fare);
    }
    catch (error) { }
    res.status(400).json({ error: error.message })
}
exports.findAll = async (req, res) => {
    try {
        const fare = await Fare.findAll();
        res.status(200).json(fare);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}


exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const fare = await Fare.findByPk(id)
        if (fare) {
            res.status(200).json(fare)
        } else {
            res.status(404).json({ message: "Fare not found" })
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}