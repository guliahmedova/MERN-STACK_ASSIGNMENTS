const express = require('express');
const router = express.Router();
const countryController = require('../../controller/mvc/country-controller');

router.get('/', countryController.getCountryView);

module.exports = router;