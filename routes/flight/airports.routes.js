const express = require('express')
const router = express.Router();
const airportcontroller = require('../../controllers/flight/airport.controller')

router.post("/airport",airportcontroller.create);
router.get("/airports",airportcontroller.findAll);
router.get("/airport/:id",airportcontroller.findOne)


module.exports = router;