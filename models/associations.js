module.exports = (db) => {
    /**
     * =====================
     *  🛫 FLIGHT MODULE
     * =====================
     */
    db.Flight.hasMany(db.FlightSeat, { foreignKey: "flight_id" });
    db.FlightSeat.belongsTo(db.Flight, { foreignKey: "flight_id" });

    db.Flight.hasMany(db.Flight_Transaction, { foreignKey: "flight_id" });
    db.Flight_Transaction.belongsTo(db.Flight, { foreignKey: "flight_id" });

    db.Flight.hasMany(db.Fare, { foreignKey: "flight_id" });
    db.Fare.belongsTo(db.Flight, { foreignKey: "flight_id" });


    /**
     * =====================
     *  🚌 BUS MODULE
     * =====================
     */
    db.Bus.hasMany(db.Bus_Seat, { foreignKey: "bus_id" });
    db.Bus_Seat.belongsTo(db.Bus, { foreignKey: "bus_id" });

    db.Bus.hasMany(db.Bus_Book, { foreignKey: "bus_id" });
    db.Bus_Book.belongsTo(db.Bus, { foreignKey: "bus_id" });


    /**
     * =====================
     *  🚆 TRAIN MODULE
     * =====================
     */
    db.Train.hasMany(db.Trainclasses, { foreignKey: "train_id" });
    db.Trainclasses.belongsTo(db.Train, { foreignKey: "train_id" });

    db.Train.hasMany(db.train_bookings, { foreignKey: "train_id" });
    db.train_bookings.belongsTo(db.Train, { foreignKey: "train_id" });


    /**
     * =====================
     *  🏨 HOTEL MODULE
     * =====================
     */
    db.Hotel.hasMany(db.ROOM, { foreignKey: "hotel_id" });
    db.ROOM.belongsTo(db.Hotel, { foreignKey: "hotel_id" });

    db.Hotel.hasMany(db.Hotel_Book, { foreignKey: "hotel_id" });
    db.Hotel_Book.belongsTo(db.Hotel, { foreignKey: "hotel_id" });


    /**
     * =====================
     *  👤 USER MODULE
     * =====================
     */
    db.USER.hasMany(db.BookingMaster, { foreignKey: "user_id" });
    db.BookingMaster.belongsTo(db.USER, { foreignKey: "user_id" });

    db.USER.hasOne(db.wallet, { foreignKey: "user_id" });
    db.wallet.belongsTo(db.USER, { foreignKey: "user_id" });

    db.USER.hasMany(db.SupportTicket, { foreignKey: "user_id" });
    db.SupportTicket.belongsTo(db.USER, { foreignKey: "user_id" });


    /**
     * =====================
     *  💳 PAYMENT MODULE
     * =====================
     */
    db.BookingMaster.hasMany(db.payment, { foreignKey: "booking_id" });
    db.payment.belongsTo(db.BookingMaster, { foreignKey: "booking_id" });

    db.payment.hasOne(db.Payment_Refund, { foreignKey: "payment_id" });
    db.Payment_Refund.belongsTo(db.payment, { foreignKey: "payment_id" });


    /**
     * =====================
     *  🎫 COMMON MODULE
     * =====================
     */
    db.Fare.hasMany(db.DiscountOffers, { foreignKey: "fare_id" });
    db.DiscountOffers.belongsTo(db.Fare, { foreignKey: "fare_id" });

    db.Fare.hasMany(db.TaxFee, { foreignKey: "fare_id" });
    db.TaxFee.belongsTo(db.Fare, { foreignKey: "fare_id" });

    db.BookingMaster.hasMany(db.TicketCancellation, { foreignKey: "booking_id" });
    db.TicketCancellation.belongsTo(db.BookingMaster, { foreignKey: "booking_id" });


    /**
     * =====================
     *  ⚙️ UTILS MODULE
     * =====================
     */
    db.Notification.belongsTo(db.USER, { foreignKey: "user_id" });
    db.USER.hasMany(db.Notification, { foreignKey: "user_id" });
};
