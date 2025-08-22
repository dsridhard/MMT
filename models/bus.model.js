module.exports = (sequelize, DataTypes) => {
  const Bus = sequelize.define("Bus", {
    bus_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    operator_name: { type: DataTypes.STRING, allowNull: false },
    bus_number: { type: DataTypes.STRING, allowNull: false },
    source_city: { type: DataTypes.STRING, allowNull: false },
    destination_city: { type: DataTypes.STRING, allowNull: false },
    departure_time: { type: DataTypes.DATE, allowNull: false },
    arrival_time: { type: DataTypes.DATE, allowNull: false },
    duration_minutes: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    available_seats: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    tableName: "buses",
    timestamps: false,
  });

  return Bus;
};
