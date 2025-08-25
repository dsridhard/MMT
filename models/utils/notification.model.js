module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define("Notification", {
        notification_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        admin_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.STRING(1234), allowNull: false },
        message: { type: DataTypes.TEXT },
        notification_type: { type: DataTypes.ENUM('booking', 'payment', 'offer', 'reminder'), allowNull: false },
        status: { type: DataTypes.ENUM('sent', 'pending', 'failed') },

    }, {
        tableName: "notifications",
        timestamps: true,
    });

    return Notification;
};

