module.exports = (sequelize, DataTypes) => {
  const Passenger_Info = sequelize.define("Passenger_Info", {
    passenger_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    booking_id: { type: DataTypes.STRING(1234), allowNull: false },
    full_name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    seating_number: { type: DataTypes.STRING(1234), allowNull: true },
   
  }, {
    tableName: "passenger_info",
    timestamps: true,
  });

  return Passenger_Info;
};
