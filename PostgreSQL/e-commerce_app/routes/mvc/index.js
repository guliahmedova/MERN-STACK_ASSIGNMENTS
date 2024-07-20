const defaultRoute = require('./default-route');
const countryRoute = require('./country-route');
const express = require('express');
const router = express.Router();

router.get('/', defaultRoute);
router.get('/countries', countryRoute);

module.exports = router;