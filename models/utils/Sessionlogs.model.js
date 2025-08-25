// models/SessionLog.js
module.exports = (sequelize, DataTypes) => {
  const SessionLog = sequelize.define(
    "SessionLog",
    {
      session_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      login_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      logout_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      ip_address: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      device_info: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: "session_logs",
      timestamps: false, // no createdAt/updatedAt
    }
  );

  return SessionLog;
};
