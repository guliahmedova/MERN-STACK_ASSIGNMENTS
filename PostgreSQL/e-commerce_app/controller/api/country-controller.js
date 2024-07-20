const CountryAddDto = require('../../models/countryAdd');
const countryService = require('../../services/country-service');

const getAllUsers = async (req, res) => {
    const result = await countryService.getAllCountries();
    if (!result.success) {
        res.status(400).json(result);
    } else {
        res.status(200).json(result);
    }
};

const addCountry = async (req, res) => {
    const countryAddDto = new CountryAddDto(req.body);
    const result = await countryService.addCountry(countryAddDto);
    if (!result.success) {
        res.status(400).json(result);
    } else {
        res.status(200).json(result);
    }
};

module.exports = {
    getAllUsers,
    addCountry
};