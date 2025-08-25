// models/PromoUsage.js
module.exports = (sequelize, DataTypes) => {
  const PromoUsage = sequelize.define(
    "PromoUsage",
    {
      usage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      offer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      times_used: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      last_used_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "promo_usage",
      timestamps: false, // disable createdAt/updatedAt
    }
  );

  return PromoUsage;
};
