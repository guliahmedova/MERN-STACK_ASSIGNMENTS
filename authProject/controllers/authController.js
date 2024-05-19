const loadEjs = require('../utils/loadEjs');

const getLogin = (req, res) => {
    loadEjs("login", req, res);
};

const loginUser = (req, res) => {
};

const getRegister = (req, res) => {
    loadEjs("register", req, res);
};

const registerUser = (req, res) => {
};

module.exports = {
    getLogin,
    loginUser,
    getRegister,
    registerUser
};
