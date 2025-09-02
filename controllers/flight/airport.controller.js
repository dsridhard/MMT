const db = require('../../models');
const Airport = db.Airport;  // <-- IMPORTANT
// console.log("Loaded models:", Object.keys(db));

exports.create = async (req, res) => {
    try {
        let airports;

        // If request body is an array → bulk insert
        if (Array.isArray(req.body)) {
            airports = await Airport.bulkCreate(req.body, { validate: true });
        } else {
            const { airport_code, airport_name, city, country } = req.body;
            airports = await Airport.create({
                airport_code,
                airport_name,
                city,
                country
            });
        }

        return res.status(201).json(airports);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const airports = await Airport.findAll();
        return res.status(200).json(airports);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const airport = await Airport.findByPk(id);

        if (airport) {
            return res.status(200).json(airport);
        } else {
            return res.status(404).json({ message: "Airport not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
