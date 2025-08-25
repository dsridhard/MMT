// models/TrainClass.js
module.exports = (sequelize, DataTypes) => {
  const TrainClass = sequelize.define(
    "TrainClass",
    {
      class_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      train_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      class_type: {
        type: DataTypes.ENUM("sleeper", "3AC", "2AC", "1AC", "chair_car"),
        allowNull: false,
      },
      base_fare: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      available_seats: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "train_classes",
      timestamps: false, // no createdAt/updatedAt
    }
  );

  return TrainClass;
};
