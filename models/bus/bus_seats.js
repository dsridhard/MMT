module.exports = (sequelize, DataTypes) => {
    const Bus_Seat = sequelize.define("Bus_Seat", {
        bus_seat_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        bus_id: { type: DataTypes.INTEGER, allowNull: false },
        seat_number: { type: DataTypes.FLOAT, allowNull: false },
        is_window:{type:DataTypes.INTEGER},
        is_booked:{type:DataTypes.INTEGER},
        fare:{type:DataTypes.FLOAT,allowNull:false},
        last_updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        tableName: "bus_seats",
        timestamps: false,
    });

    return Bus_Seat;
};