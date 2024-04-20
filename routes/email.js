const express = require('express');
const router = express.Router();

const {subscribe} = require('../controller/Emaill');
const {Contactmail } = require('../controller/Emaill');
router.post('/subscribe', subscribe);
router.post('/contact-message', Contactmail);

module.exports = router;