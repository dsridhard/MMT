const express = require("express");
const router = express.Router();
const flightController = require("../../controllers/flight/flight.controller");

router.post("/flight", flightController.create);
router.get("/flights", flightController.findAll);
router.get("/flights/:id", flightController.findOne);
router.post("/searchflight",flightController.searchAPI)
module.exports = router;


