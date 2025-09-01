const express = require("express");
const router = express.Router();
const flightController = require("../../controllers/flight/flight.controller");

router.post("/flights", flightController.create);
router.get("/flights", flightController.findAll);
router.get("/flights/:id", flightController.findOne);

module.exports = router;