const express = require('express');
const router = express.Router();

const {dahanuRegistration} = require('../controller/Dahanu');

router.post('/dahanubooking', dahanuRegistration);

module.exports = router;