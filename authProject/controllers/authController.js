const loadEjs = require('../utils/loadEjs');
const parseRequestBody = require('../utils/parser');
const User = require('../models/User');
const generateResponse = require('../utils/responseGenerator');
const _authService = require('../services/auth-service');

const getLogin = (req, res) => {
    loadEjs("login", req, res);
};

const loginUser = (req, res) => {
    console.log(req, res);
};

const getRegister = (req, res) => {
    loadEjs("register", req, res);
};

const registerUser = async (req, res) => {
    const body = await parseRequestBody(req);
    console.log(`req: ${req} - res: ${res}`);
    const user = new User(body.email, body.username, body.password, body.isActive);
    const result = await _authService.signUp(user);
    generateResponse(res, 201, "text/html", result);
};

module.exports = {
    getLogin,
    loginUser,
    getRegister,
    registerUser
};