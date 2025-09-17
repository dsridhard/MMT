const { Flight } = require("../../models");
const { Op } = require('sequelize');
exports.create = async (req, res) => {
    try {
        const {
            airline_name,
            flight_number,
            source_airport_code,
            destination_airport_code,
            departure_time,
            arrival_time,
            duration_minutes,
            price,
            class_type,
            available_seats,
            status,
            aircraft_type,
            gate_number,
            terminal,
        } = req.body;

        const flight = await Flight.create({
            airline_name,
            flight_number,
            source_airport_code,
            destination_airport_code,
            departure_time,
            arrival_time,
            duration_minutes,
            price,
            class_type,
            available_seats,
            status,
            aircraft_type,
            gate_number,
            terminal,
        });

        return res.status(201).json(flight);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


exports.findAll = (req, res) => {
    Flight.findAll()
        .then((flight) => res.status(200).json(flight))
        .catch((error) => res.status(400).json({ error: error.message }));
};

exports.findOne = (req, res) => {
    const { id } = req.params; // Correctly destructure 'id' from req.params

    Flight.findByPk(id) // Use the 'id' to find the flight by primary key
        .then((flight) => {
            if (flight) {
                res.status(200).json(flight); // Return the flight if found
            } else {
                res.status(404).json({ message: "Flight not found" }); // Handle not found case
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "An error occurred", error }); // Handle errors
        });
};


exports.searchAPI = async (req, res) => {
    const { source_airport_code,
        destination_airport_code,
        airline_name,
        departure_time,
        arrival_time,
        class_type, } = req.body;

    const searchBody = await Flight.findAll({
        where: {
            [Op.or]: [
                { airline_name: airline_name },
                { arrival_time: arrival_time },
                { class_type: { [Op.eq]: class_type } }, // Enforce case sensitivity
                { departure_time: departure_time },
                { destination_airport_code: destination_airport_code },
                { source_airport_code: source_airport_code }
            ]

        }
    });

    if (!searchBody) {
        return res.status(404).json({ error: "Flight not found " })
    }

    return res.status(200).json({
        data: searchBody
    })
}