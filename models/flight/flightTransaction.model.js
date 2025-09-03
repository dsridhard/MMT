module.exports = (sequelize, DataTypes) => {
  const Flight_Transaction = sequelize.define("Flight_Transaction", {
    booking_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.STRING(1234), allowNull: false },
    flight_id: { type: DataTypes.INTEGER, allowNull: false },
    booking_status: { type: DataTypes.ENUM('pending','confirmed','cancelled'), allowNull: false },
    total_price: { type: DataTypes.DECIMAL(10,2) },
    passenger_count: { type: DataTypes.INTEGER, defaultValue: DataTypes.NOW },
    
  }, {
    tableName: "flight_book_transactions",
    timestamps: true,
  });

  return Flight_Transaction;
};
