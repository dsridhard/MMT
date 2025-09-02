const express = require('express')
const router = express.Router()
const passengerInfoController = require('../../controllers/master/passenger.controller')


router.post("/passenger", passengerInfoController.create);
router.get("/passengers", passengerInfoController.findAll);
router.get("/passenger/:id", passengerInfoController.findOne);

module.exports = router