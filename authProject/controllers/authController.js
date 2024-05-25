const loadEjs = require('../utils/loadEjs');
const parseRequestBody = require('../utils/parser');
const User = require('../models/User');
const generateResponse = require('../utils/responseGenerator');
const _authService = require('../services/auth-service');
const { CONTENT_TYPES } = require('../utils/constants');

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
    const user = new User(body.email, body.username, body.password, true);
    const result = await _authService.signUp(user);

    console.log(`auth-controller/registerUser/result:`, result);
    console.log(`auth-controller/registerUser/user:`, user);
    console.log(`auth-controller/registerUser/body:`, body);

    generateResponse({
        res: res,
        status: 201,
        header: CONTENT_TYPES['.json'],
        data: result
    });
};

module.exports = {
    getLogin,
    loginUser,
    getRegister,
    registerUser
};