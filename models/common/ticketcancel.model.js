// models/TicketCancellation.js
module.exports = (sequelize, DataTypes) => {
  const TicketCancellation = sequelize.define(
    "TicketCancellation",
    {
      cancellation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cancelled_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "ticket_cancellations",
      timestamps: false, // disable createdAt/updatedAt
    }
  );

  return TicketCancellation;
};
