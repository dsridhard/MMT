module.exports = (sequelize, DataTypes) => {
  const Fare = sequelize.define("Fare", {
    fare_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    module_type: {
      type: DataTypes.ENUM("flight", "hotel", "train", "bus"),
      allowNull: false,
    },
    module_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // This will be linked to flight_id, hotel_id, train_id, bus_id
    },
    class_type: {
      type: DataTypes.STRING, // e.g., Economy, Business, Sleeper, Deluxe
      allowNull: true,
    },
    base_fare: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    taxes: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    total_fare: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(5),
      defaultValue: "INR",
    },
    available_seats: {
      type: DataTypes.INTEGER,
      allowNull: true, // not applicable for hotels
    },
    last_updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: "fares_details",
    timestamps: false,
  });

  return Fare;
};
