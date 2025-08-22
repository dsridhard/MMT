module.exports = (sequelize, DataTypes) => {
    const Bus_Book = sequelize.define("Bus_Book", {
        bus_book_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        bus_id: { type: DataTypes.INTEGER, allowNull: false },
        journey_date:{type:DataTypes.DATE,allowNull:false},
        seat_count: { type: DataTypes.INTEGER, allowNull: false },
        booking_status:{type:DataTypes.ENUM('Pending','Confirmed','Cancelled')},
        is_window:{type:DataTypes.INTEGER},
        is_booked:{type:DataTypes.INTEGER},
        total_price:{type:DataTypes.FLOAT,allowNull:false},
    }, {
        tableName: "bus_books",
        timestamps: true,
    });

    return Bus_Book;
};