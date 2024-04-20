const express = require('express');
const router = express.Router();

const {sandhanRegistration} = require('../controller/Sandhan');

router.post('/sandhanbooking', sandhanRegistration);

module.exports = router;