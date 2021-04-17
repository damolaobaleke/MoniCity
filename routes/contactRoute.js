const express = require('express');
const router = express.Router()

let { contactController, storeUserInformation } = require('../controller/contactController');

router.get('/contact', contactController)

router.post('/contact', storeUserInformation)

module.exports = router;