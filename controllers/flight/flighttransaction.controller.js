const { Flight_Transaction } = require("../../models")
const jwt = require("jsonwebtoken");
// Create a new flight transaction
exports.create = async (req, res) => {
    try {
        // ✅ extract user_id from token
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            return res.status(401).json({ error: "Authorization header missing" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");

        const user_id = decoded.id; // ✅ comes from token
        const { flight_id, booking_status, total_price, passenger_count } = req.body;

        const flightTransaction = await Flight_Transaction.create({
            user_id,
            flight_id,
            booking_status,
            total_price,
            passenger_count
        });

        return res.status(201).json(flightTransaction);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};




// Fetch all flight transactions
exports.findAll = async (req, res) => {
    try {
        const transactions = await Flight_Transaction.findAll();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch single transaction by id
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;  // ✅ extract id properly
        const flightTransaction = await Flight_Transaction.findByPk(id);

        if (flightTransaction) {
            res.status(200).json(flightTransaction);
        } else {
            res.status(404).json({ message: "FlightTransaction not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
