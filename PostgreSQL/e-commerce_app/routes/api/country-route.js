const countryController = require('../../controller/api/country-controller');
const express = require('express');
const router = express.Router();

router.get('/', countryController.getAllUsers);
router.post('/', countryController.addCountry);

module.exports = router;