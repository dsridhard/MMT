// models/TravelInsurance.js
module.exports = (sequelize, DataTypes) => {
  const TravelInsurance = sequelize.define(
    "TravelInsurance",
    {
      insurance_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      provider_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      policy_number: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      coverage_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      premium_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "expired", "cancelled"),
        allowNull: false,
        defaultValue: "active",
      },
    },
    {
      tableName: "travel_insurance",
      timestamps: false, // disable createdAt/updatedAt
    }
  );

  return TravelInsurance;
};
