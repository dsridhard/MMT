module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    payment_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    booking_id: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.FLOAT, allowNull: false },
    method: { type: DataTypes.ENUM("card", "upi", "netbanking", "wallet"), allowNull: false },
    status: { type: DataTypes.ENUM("success", "failed", "pending"), defaultValue: "pending" },
    transaction_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    tableName: "payments",
    timestamps: false,
  });

  return Payment;
};
