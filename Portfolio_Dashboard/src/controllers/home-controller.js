const loadEjs = require('../utils/loadEjs');
const _homeService = require('../services/home-service');

const getHome = async (req, res) => {
    const cards = await _homeService.getAllCards();
    loadEjs("home", req, res, cards);
};

module.exports = { getHome };