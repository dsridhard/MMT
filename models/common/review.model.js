// models/Review.js
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      flight_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // optional (review can be for hotel only)
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // optional (review can be for flight only)
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5, // assuming 1–5 rating scale
        },
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "reviews",
      timestamps: false, // disable Sequelize auto timestamps
    }
  );

  return Review;
};
