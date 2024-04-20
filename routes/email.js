const express = require('express');
const router = express.Router();

const {subscribe} = require('../controller/Emaill');

router.post('/subscribe', subscribe);

module.exports = router;