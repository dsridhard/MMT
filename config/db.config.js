const { logger } = require("sequelize/lib/utils/logger");

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "RootAdmin@123",
    DB: "mmt",
    dialect: "mysql",
    logging:false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

}