const { FlightSeat } = require("../../models"); // adjust path if needed

exports.create = async (req, res) => {
    try {
        let flightseats;

        // If request body is an array → bulk insert
        if (Array.isArray(req.body)) {
            flightseats = await FlightSeat.bulkCreate(req.body, { validate: true });
        } else {
            // Otherwise single seat insert
            const { seat_id, flight_id, seat_number, class_type, is_booked, price_override } = req.body;
            flightseats = await FlightSeat.create({
                seat_id,
                flight_id,
                seat_number,
                class_type,
                is_booked,
                price_override,
            });
        }

        return res.status(201).json(flightseats);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};


exports.findAll = (req, res) => {
    FlightSeat.findAll()
        .then((flightseat) => res.status(200).json(flightseat))
        .catch((error) => res.status(400).json({ error: error.message }));
};

exports.findOne = (req, res) => {
    const id = (req, res) => {
        FlightSeat.findByPk(id).then((flightseat) => {
            if (flightseat) {
                res.status(200).json(flightseat);
            } else {
                res.status(404).json({ message: "Flight not found" });
            }
        });
    };
};

