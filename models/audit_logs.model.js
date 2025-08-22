module.exports = (sequelize, DataTypes) => {
    const Audit_Logs = sequelize.define("Audit_Logs", {
        log_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        admin_id: { type: DataTypes.INTEGER, allowNull: false },
        action: { type: DataTypes.STRING(1234), allowNull: false },
        details:{type:DataTypes.TEXT},
        
    }, {
        tableName: "audit_logs",
        timestamps: true,
    });

    return Audit_Logs;
};