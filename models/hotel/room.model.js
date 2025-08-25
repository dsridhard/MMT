// models/Room.js
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      room_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      room_type: {
        type: DataTypes.ENUM("single", "double", "suite", "deluxe"),
        allowNull: false,
      },
      bed_type: {
        type: DataTypes.ENUM("single", "double", "queen", "king"),
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      base_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      available_rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "rooms",
      timestamps: true, // no createdAt/updatedAt
    }
  );

  return Room;
};
