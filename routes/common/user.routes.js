const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/master/user.controller')


router.post("/users/register", UserController.create)
router.get("/users", UserController.findAll)
router.get("/user/:id", UserController.findOne)
router.post("/login",UserController.login)

module.exports = router