const express = require('express')
const router = express.Router()
const flightTransactionController = require('../../controllers/flight/flighttransaction.controller')
const auth = require("../../middleware/auth.middleware");

router.post("/flight_books", auth, flightTransactionController.createBooking)
router.get("/flight_books", flightTransactionController.findAll)
router.get("/flight_books/:id", flightTransactionController.findOne)


module.exports = router