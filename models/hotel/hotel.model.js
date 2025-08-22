module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("Hotel", {
    hotel_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    hotel_name: { type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    star_rating: { type: DataTypes.INTEGER, allowNull: true },
    price_per_night: { type: DataTypes.FLOAT, allowNull: false },
    available_rooms: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    tableName: "hotels",
    timestamps: true,
  });

  return Hotel;
};
