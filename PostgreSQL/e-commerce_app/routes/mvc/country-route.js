const express = require('express');
const router = express.Router();
const countryController = require('../../controller/mvc/country-controller');

router.get('/', countryController.getCountryView);
router.get('/add', countryController.getCountryAddView);
router.post('/add', countryController.addCountry);
router.get('/:id', countryController.getCountryEditView); 
router.put('/:id', countryController.editCountry); 
router.post('/:id', countryController.deleteCountry); 

module.exports = router;