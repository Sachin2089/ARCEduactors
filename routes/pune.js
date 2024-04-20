const express = require('express');
const router = express.Router();

const {puneRegistration} = require('../controller/Pune');

router.post('/punebooking', puneRegistration);

module.exports = router;