module.exports = (sequelize, DataTypes) => {
  const Hotel_Book = sequelize.define("Hotel_Book", {
    hotel_booking_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    hotel_id: { type: DataTypes.INTEGER, allowNull: false },
    room_id: { type: DataTypes.INTEGER, allowNull: false },
    check_in_date: { type: DataTypes.DATE, allowNull: false },
    check_out_date: { type: DataTypes.DATE, allowNull: false },
    guests_count: { type: DataTypes.INTEGER, allowNull: false },
    booking_status: { type: DataTypes.ENUM('pending','confirmed','cancelled') , allowNull: false },
    total_price: { type: DataTypes.DECIMAL(10,2) , allowNull: false },
  }, {
    tableName: "hotel_book_transactions",
    timestamps: true,
  });

  return Hotel_Book;
};
