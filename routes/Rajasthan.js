const express = require('express');
const router = express.Router();

const {rajasthanRegistration} = require('../controller/Rajasthan');

router.post('/rajasthanbooking', rajasthanRegistration);

module.exports = router;