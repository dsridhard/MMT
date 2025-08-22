module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define("Wallet", {
        wallet_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        balance: { type: DataTypes.FLOAT, allowNull: false },
        transaction_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        last_updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        tableName: "wallet",
        timestamps: false,
    });

    return Wallet;
};

