// models/TaxFee.js
module.exports = (sequelize, DataTypes) => {
  const TaxFee = sequelize.define(
    "TaxFee",
    {
      tax_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fare_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tax_type: {
        type: DataTypes.ENUM("airport_tax", "fuel_surcharge", "service_fee", "convenience_fee"),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      tableName: "taxes_fees",
      timestamps: false, // disable createdAt/updatedAt
    }
  );

  return TaxFee;
};
