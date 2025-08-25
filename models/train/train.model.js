// models/Train.js
module.exports = (sequelize, DataTypes) => {
  const Train = sequelize.define(
    "Train",
    {
      train_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      train_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      train_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      source_station: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      destination_station: {
        type: DataTypes.STRING(100),
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
    },
    {
      tableName: "trains",
      timestamps: false, // no createdAt/updatedAt
    }
  );

  return Train;
};
