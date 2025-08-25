module.exports = (sequelize, DataTypes) => {
    const Search_History = sequelize.define(
        "Search_History",
        {
            search_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            source_airport_code: {
                type: DataTypes.CHAR(3),
                allowNull: false,
            },
            destination_airport_code: {
                type: DataTypes.CHAR(3),
                allowNull: false,
            },
            journey_date: {
                type: DataTypes.DATEONLY, // DATE only, no time
                allowNull: false,
            },
            search_time: {
                type: DataTypes.DATE, // will hold timestamp
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: "search_history",
            timestamps: true, // disable createdAt/updatedAt
        }
    );

    return Search_History;
};
