const express = require("express");
const router = express.Router();

// Import individual route files
const flightroutes = require("./flight/flight.routes");
const flightseatroutes = require("./flight/flightseat.routes");
const airportroutes = require("./flight/airports.routes");

// Mount them on the router
router.use(flightroutes);
router.use(flightseatroutes);
router.use(airportroutes);

module.exports = router;
