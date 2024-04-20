const express = require('express');
const router = express.Router();

const {spitiRegistration} = require('../controller/Spiti');

router.post('/spitibooking', spitiRegistration);

module.exports = router;