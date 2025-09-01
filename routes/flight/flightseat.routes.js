const express = require("express");
const router = express.Router();
const flightController = require("../../controllers/flight/flightseat.controller");

router.post("/flightseat", flightController.create);
router.get("/flightseats", flightController.findAll);
router.get("/flightseat/:id", flightController.findOne);

module.exports = router;