const express = require('express')
const router = express.Router()
const flightTransactionController = require('../../controllers/flight/flighttransaction.controller')

router.post("/flight_books", flightTransactionController.create)
router.get("/flight_books", flightTransactionController.findAll)
router.get("/flight_books/:id", flightTransactionController.findOne)


module.exports = router