module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define("Airport", {
    airport_code: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    airport_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: "airports",
    timestamps: false,
  });

  return Airport;
};
