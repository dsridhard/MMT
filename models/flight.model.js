module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define("Flight", {
    flight_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    airline_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    source_airport_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    destination_airport_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    departure_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    arrival_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    available_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: "flights",
    timestamps: true,
  });

  return Flight;
};
