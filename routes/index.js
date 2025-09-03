const express = require("express");
const router = express.Router();

// Import individual route files

// Common Routes
const fareroutes = require("./flight/flight.routes")


// Flight Routes 
const flightroutes = require("./flight/flight.routes");
const flightseatroutes = require("./flight/flightseat.routes");
const airportroutes = require("./flight/airports.routes");
const flighttransactionroutes = require("./flight/flightTransaction.routes")

// User Routes 
const userroutes = require('./common/user.routes')
const passengeroutes = require('./common/passenger_info.routes')





// Mount them on the router



// CommonRoutes
router.use(fareroutes);


// FlightRoutes
router.use(flightroutes);
router.use(flightseatroutes);
router.use(airportroutes);
router.use(flighttransactionroutes)

// UserRoutes
router.use(userroutes)
router.use(passengeroutes)

module.exports = router;
