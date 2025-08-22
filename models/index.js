const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Import models
//Common Modules
db.adminUser = require('./adminUser.js')(sequelize, Sequelize)
db.Audit_Logs = require('./audit_logs.model.js')(sequelize,Sequelize)
db.USER = require('./user.model.js')(sequelize, Sequelize)

//Payment Transaction Model
db.Fare =require('./fare_details.model.js')(sequelize,Sequelize)
db.payment = require('./payment.model.js')(sequelize, Sequelize)
db.wallet = require('./wallets.model.js')(sequelize, Sequelize)
db.DiscountOffers =require('./discount_offers.model.js')(sequelize,Sequelize)
//Flight Models
db.airport = require('./airport.js')(sequelize, Sequelize)

//Bus Models
db.Bus_Seat = require('./bus_seats.js')(sequelize, Sequelize)
db.Bus_Book= require('./bus_book.model.js')(sequelize,Sequelize)

//Train Model


//Hotel Model



module.exports = db;

