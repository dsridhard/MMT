module.exports = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define("PaymentMethod", {
        paymentmethod_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        method_name: { type: DataTypes.STRING, allowNull: false },
        isActive: { type: DataTypes.BOOLEAN, allowNull: false},
    }, {
        tableName: "payment_methods",
        timestamps: true,
    });

    return PaymentMethod;
};
