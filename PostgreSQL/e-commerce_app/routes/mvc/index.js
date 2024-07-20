const express = require('express');
const router = express.Router();

const defaultRoute = require('./default-route');
const countryRoute = require('./country-route');

router.use('/', defaultRoute);
router.use('/countries', countryRoute);

module.exports = router;
