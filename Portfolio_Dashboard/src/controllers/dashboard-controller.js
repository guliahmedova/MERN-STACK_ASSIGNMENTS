const loadEjs = require('../utils/loadEjs');
const parseRequestBody = require('../utils/parser');
const _dashboardService = require('../services/dashboard-service');
const Card = require('../models/card');

const getDashboard = async (req, res) => {
    const cards = await _dashboardService.getAllCards();
    console.log("cards: ", cards);
    loadEjs("dashboard", req, res, cards);
};

const getCreatePage = (req, res) => {
    loadEjs("create", req, res);
};

const createCard = async (req, res) => {
    const body = await parseRequestBody(req);
    const card = new Card(body.title, body.desc, body.icon);
    const result = await _dashboardService.createCard(card);

    if (result) {
        res.writeHead(302, {
            'Location': '/dashboard'
        });
        res.end();
    } else {
        generateResponse({
            res: res,
            status: 500,
            header: CONTENT_TYPES['.json'],
            data: { error: 'Registration failed' }
        });
    }
};

module.exports = { getDashboard, getCreatePage, createCard };