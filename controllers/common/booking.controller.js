// controllers/master/bookingMaster.controller.js
const { BookingMaster, USER, Flight, Bus, Train, Hotel, payment } = require("../../models");
const jwt = require("jsonwebtoken");

// exports.create = async (req, res) => {
//     try {
//         // ✅ ensure user is logged in
//         const authHeader = req.headers.authorization;
//         if (!authHeader) {
//             return res.status(401).json({ error: "No token provided" });
//         }
//         const token = authHeader.split(" ")[1];
//         const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");

//         const { booking_type, reference_id, total_amount, status } = req.body;

//         if (!["flight", "train", "bus", "hotel"].includes(booking_type)) {
//             return res.status(400).json({ error: "Invalid booking type" });
//         }

//         const newBooking = await BookingMaster.create({
//             user_id: decoded.id, // ✅ from token
//             booking_type,
//             reference_id, // flight_id / train_id / bus_id / hotel_id
//             status: status || "pending",
//             total_amount
//         });

//         return res.status(201).json({
//             message: "Booking created successfully",
//             booking: newBooking
//         });

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// Get all bookings (admin)
exports.findAll = async (req, res) => {
    try {
        const bookings = await BookingMaster.findAll({
            include: [
                { model: USER, attributes: ["user_id", "full_name", "email"] },
                { model: Flight, attributes: ["flight_id", "airline_name"] },
                { model: Bus, attributes: ["bus_id", "operator_name"] },
                { model: Train, attributes: ["train_id", "train_name"] },
                { model: Hotel, attributes: ["hotel_id", "hotel_name"] },
                { model: payment }
            ]
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user’s bookings
exports.findByUser = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "No token provided" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "mysecretkey");

        const bookings = await BookingMaster.findAll({
            where: { user_id: decoded.id },
            include: [
                { model: Flight, attributes: ["flight_id", "airline_name"] },
                { model: Bus, attributes: ["bus_id", "operator_name"] },
                { model: Train, attributes: ["train_id", "train_name"] },
                { model: Hotel, attributes: ["hotel_id", "hotel_name"] },
                { model: payment }
            ]
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Update booking status
exports.updateStatus = async (req, res) => {
    try {
        const { id } = req.params; // booking_id
        const { status } = req.body;

        const booking = await BookingMaster.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }

        booking.status = status;
        await booking.save();

        res.status(200).json({ message: "Booking updated", booking });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete booking
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const booking = await BookingMaster.findByPk(id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }

        await booking.destroy();
        res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
