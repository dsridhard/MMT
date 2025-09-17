const { Passenger_Info } = require("../../models");

// Create a passenger
exports.create = async (req, res) => {
    try {
        let pax_info;
        if (Array.isArray(req.body)) {
            pax_info = await Passenger_Info.bulkCreate(req.body, { validate: true });
        } else {
            const { booking_id, full_name, age, gender, seating_number } = req.body;
            pax_info = await Passenger_Info.create({
                booking_id,
                full_name,
                age,
                gender,
                seating_number,
            });
        }
        return res.status(201).json(pax_info);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all passengers
exports.findAll = async (req, res) => {
    try {
        const passengers = await Passenger_Info.findAll();
        res.status(200).json(passengers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get one passenger by ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const passenger = await Passenger_Info.findByPk(id);

        if (passenger) {
            res.status(200).json(passenger);
        } else {
            res.status(404).json({ message: "Passenger not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
