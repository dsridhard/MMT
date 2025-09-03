const express =require('express')
const router = express.Router()
const FareController = require('../../controllers/master/fare.controller')


router.post("/fare",FareController.create)
router.get("/fares",FareController.findAll)
router.get("/fare/:id",FareController.findOne)

module.exports =router