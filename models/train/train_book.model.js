// models/TrainBooking.js
module.exports = (sequelize, DataTypes) => {
  const TrainBooking = sequelize.define(
    "TrainBooking",
    {
      train_booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      train_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      journey_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      passenger_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      booking_status: {
        type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
        allowNull: false,
        defaultValue: "pending",
      },
      total_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "train_bookings",
      timestamps: false, // disabling default createdAt/updatedAt
    }
  );

  return TrainBooking;
};
