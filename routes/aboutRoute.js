const express = require('express')
let router = express.Router()

let { aboutController } = require("../controller/aboutController")

router.get("/about", aboutController)


module.exports = router