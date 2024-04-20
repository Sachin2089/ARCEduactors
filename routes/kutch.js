const express = require('express');
const router = express.Router();

const {kutchRegistration} = require('../controller/Kutch');

router.post('/kutchbooking', kutchRegistration);

module.exports = router;