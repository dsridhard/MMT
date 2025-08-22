const { ENUM } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const FlightSeat = sequelize.define("FlightSeat", {
    seat_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    flight_id: { type: DataTypes.INTEGER, allowNull: false },
    seat_number :{ type: DataTypes.STRING(1234), allowNull: false },
    class_type: { type: DataTypes.ENUM('economy','premium_economy','business','first'), allowNull: false },
    is_booked: { type: DataTypes.INTEGER, allowNull: false },
    price_override: { type: DataTypes.DECIMAL(10, 2), allowNull: true },

  }, {
    tableName: "flight_seats",
    timestamps: false,
  });

  return FlightSeat;
};
