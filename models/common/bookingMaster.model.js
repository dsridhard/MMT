// models/BookingMaster.js
module.exports = (sequelize, DataTypes) => {
  const BookingMaster = sequelize.define(
    "BookingMaster",
    {
      booking_master_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      booking_type: {
        type: DataTypes.ENUM("flight", "hotel", "train", "bus"),
        allowNull: false,
      },
      reference_id: {
        type: DataTypes.STRING(1234),
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
        allowNull: false,
        defaultValue: "pending",
      },
    
    },
    {
      tableName: "bookings_master",
      timestamps: true, // manage created_at manually
    }
  );

  return BookingMaster;
};
