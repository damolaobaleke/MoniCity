const express = require('express')
let router = express.Router()

let { aboutController } = require("../controller/aboutController")

router.get("/about", aboutController)

//router.post("/about")


module.exports = router