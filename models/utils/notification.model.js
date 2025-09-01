module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define(
        "Notification",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER, // match User.id
                allowNull: false,
                references: {
                    model: "user", // tableName, not modelName
                    key: "id",
                },
            },
            admin_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "admins",     // must match tableName in Admin model
                    key: "admin_id",     // must match the PK column name in Admin model
                },
            },

            message: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            status: {
                type: DataTypes.ENUM("Sent", "Pending", "Failed"),
                defaultValue: "Pending",
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: "notifications",
            timestamps: false,
        }
    );

    return Notification;
};
