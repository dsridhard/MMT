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

//util
db.Notification = require('./utils/notification.model.js')(sequelize, Sequelize)
db.Audit_Logs = require('./utils/audit_logs.model.js')(sequelize, Sequelize)
db.SessionLog =require('./utils/Sessionlogs.model.js')(sequelize,Sequelize)
db.SupportTicket= require('./utils/supportticket.model.js')(sequelize,Sequelize)
//Common Modules
db.Passenger_Info = require('./common/passengerInfo.model')(sequelize, Sequelize)
db.DiscountOffers = require('./common/discount_offers.model.js')(sequelize, Sequelize)
db.Fare = require('./common/fare_details.model.js')(sequelize, Sequelize)
db.Search_History =require('./common/searchHistory.model')(sequelize,Sequelize)
db.Reviews= require('./common/review.model.js')(sequelize,Sequelize)
db.PromoUsage = require('./common/Promo.model.js')(sequelize,Sequelize)
db.TravelInsurance =require('./common/travelinsurance.model.js')(sequelize,Sequelize)
db.TicketCancellation = require('./common/ticketcancel.model.js')(sequelize,Sequelize)
db.TaxFee= require('./common/taxes.model')(sequelize,Sequelize)
db.BookingMaster=require('./common/bookingMaster.model.js')(sequelize,Sequelize)
//Payment Transaction Model
db.payment = require('./payment/payment.model.js')(sequelize, Sequelize)
db.wallet = require('./payment/wallets.model.js')(sequelize, Sequelize)
db.PaymentMethod = require('./payment/paymentmethod.model')(sequelize, Sequelize)
db.Payment_Refund = require('./payment/paymentrefund.model.js')(sequelize, Sequelize)

//Flight Models
db.airport = require('./flight/airport.js')(sequelize, Sequelize)
db.Flight = require('./flight/flight.model.js')(sequelize, Sequelize)
db.FlightSeat =require('./flight/flightSeat.model.js')(sequelize,Sequelize)
db.Flight_Transaction = require('./flight/flightTransaction.model.js')(sequelize, Sequelize)

//Bus Models
db.Bus_Seat = require('./bus/bus_seats.js')(sequelize, Sequelize)
db.Bus_Book = require('./bus/bus_book.model.js')(sequelize, Sequelize)
db.Bus =require('./bus/bus.model.js')(sequelize,Sequelize)

//Train Model
db.Train = require('./train/train.model.js')(sequelize,Sequelize)
db.Trainclasses =require('./train/TrainSeat.model.js')(sequelize,Sequelize)
db.train_bookings = require('./train/train_book.model')(sequelize,Sequelize)
//Hotel Model
db.Hotel = require('./hotel/hotel.model.js')(sequelize, Sequelize)
db.Hotel_Book = require('./hotel/hotel_book.model.js')(sequelize, Sequelize)
db.ROOM = require('./hotel/room.model')(sequelize,Sequelize)


//User Model
db.adminUser = require('./users/adminUser.js')(sequelize, Sequelize)
db.USER = require('./users/user.model.js')(sequelize, Sequelize)
db.Loyalty = require('./users/loyalty.model.js')(sequelize,Sequelize)

module.exports = db;

