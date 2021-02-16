const express = require('express')
let router = express.Router()

let { homeController } = require("../controller/homeController")

router.get("/", homeController)


module.exports = router