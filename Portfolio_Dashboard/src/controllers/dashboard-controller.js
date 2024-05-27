const loadEjs = require('../utils/loadEjs');
const parseRequestBody = require('../utils/parser');
const _heroService = require('../services/hero-service');

const getDashboard = (req, res) => {
    loadEjs("dashboard", req, res);
};

const getHero = async (req, res) => {
    const body = await parseRequestBody(req);
    const hero = new Hero(body.title);
    const result = await _heroService.gethero(hero);

    if (result) {
        res.writeHead(302, {
            'Location': '/'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Error occured while creating hero title' }
        });
    }
};

const getHeroList = async (req, res) => { };
const getServices = async (req, res) => { };
const getusers = async (req, res) => { };
const getPortfolios = async (req, res) => { };
const getTeam = async (req, res) => { };

module.exports = { getDashboard, getHero, getHeroList, getServices, getusers, getPortfolios, getTeam };