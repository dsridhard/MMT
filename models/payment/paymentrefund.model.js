module.exports = (sequelize, DataTypes) => {
    const Payment_Refund = sequelize.define("Payment_Refund", {
        refund_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        booking_id: { type: DataTypes.INTEGER, allowNull: false },
        payment_id: { type: DataTypes.INTEGER, allowNull: false },
        refund_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        refund_status: { type: DataTypes.ENUM('initiated', 'processed', 'failed'), allowNull: false },
        refund_method: { type: DataTypes.ENUM('upi', 'card', 'netbanking', 'wallet'), allowNull: false },
    }, {
        tableName: "payment_refund",
        timestamps: true,
    });

    return Payment_Refund;
};
