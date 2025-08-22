module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define(
    "Flight",
    {
      flight_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      airline_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      flight_number: {
        type: DataTypes.STRING(50),
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
        type: DataTypes.INTEGER, // fixed from DATE
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT, // fixed casing
        allowNull: false,
      },
      class_type: {
        type: DataTypes.ENUM("Economy", "Premium Economy", "Business", "First"),
        allowNull: false,
      },
      available_seats: {
        type: DataTypes.INTEGER, // fixed from BOOLEAN
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Scheduled", "Delayed", "Cancelled", "Completed"),
        defaultValue: "Scheduled",
      },
      aircraft_type: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      gate_number: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      terminal: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      tableName: "flights",
      timestamps: true, // adds createdAt & updatedAt
    }
  );

  return Flight;
};
