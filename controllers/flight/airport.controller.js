const { Airport } = require('../../models');

exports.create = async (req, res) => {
    try {
        let airports;
        //If request body is an array → bulk insert
        if (Array.isArray(req.body)) {
            airports = await airports.bulkCreate(req.body, { validate: true });

        } else {
            const { airport_code, airport_name, city, country } = req.body;
            airports = await Airport.create({

            });
        }
        return res.status(201).json(airports);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


exports.findAll = async (req, res) => {
    try {
        const airport = await Airport.findAll();
        return res.status(200).json(airport);

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const airport = await Airport.findByPk(id);

        if (airport) {
            return res.status(200).json(airport);
        } else {
            return res.status(400).json({ message: "airport not found" })
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
