const express = require('express');
const router = express.Router();

const {ladakhRegistration} = require('../controller/Ladakh');

router.post('/ladakhbooking', ladakhRegistration);

module.exports = router;