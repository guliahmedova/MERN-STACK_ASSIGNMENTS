const countryService = require('../../services/country-service');
const CountryAddDto = require('../../models/countryAdd');

const getCountryView = async (req, res) => {
    const result = await countryService.getAllCountries();

    if (result.success) {
        res.render('country/index', { data: result.data });
    } else {
        res.render('country/index');
    }
};

const getCountryAddView = async (req, res) => {
    res.render('country/add');
};

const addCountry = async (req, res) => {
    const countryAddDto = new CountryAddDto(req.body);
    const result = await countryService.addCountry(countryAddDto);

    if (result.success) {
        res.redirect('/countries');
    };
};

const getCountryEditView = async (req, res) => {
    const result = await countryService.getAllCountries();
    const { id } = req.params;

    const country = result.data.find(c => c.id == id);

    if (result.success) {
        res.render('country/edit', { data: country });
    } else {
        res.render('country/edit');
    }
};

const editCountry = async (req, res) => {
    const { id } = req.params;
    const country = { id, ...req.body };
    const result = await countryService.editCountry(country);

    if (result.success) {
        res.redirect('/countries');
    };
};


const deleteCountry = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await countryService.deleteCountry(id);

        if (result.success) {
            res.redirect('/countries');
        } else {
            res.redirect('/countries', { error: result.message });
        }
    } catch (error) {
        console.error('Delete Country Error:', error);
        res.redirect('/countries', { error: 'An error occurred while deleting the country.' });
    }
};

module.exports = {
    getCountryView,
    getCountryAddView,
    addCountry,
    getCountryEditView,
    editCountry,
    deleteCountry
};