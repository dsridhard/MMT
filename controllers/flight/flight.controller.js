const { Flight } = require("../../models"); // adjust path if needed

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
    const id = (req, res) => {
        Flight.findByPk(id).then((flight) => {
            if (flight) {
                res.status(200).json(flight);
            } else {
                res.status(404).json({ message: "Flight not found" });
            }
        });
    };
};
