module.exports = (sequelize, DataTypes) => {
  const Loyalty = sequelize.define(
    "Loyalty",
    {
      loyalty_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      points_balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      last_updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "loyalty",
      timestamps: true, 
    }
  );

  return Loyalty;
};
