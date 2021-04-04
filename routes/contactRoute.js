const express = require('express');
const router = express.Router()

let { contactController } = require('../controller/contactController');

router.get('/contact', contactController)

module.exports = router;