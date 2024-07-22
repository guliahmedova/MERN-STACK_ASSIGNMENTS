const UserAddDto = require("../models/userAdd");
const UserLoginDto = require("../models/userLogin");
const authService = require('../services/auth-service');

const getLoginView = async (req, res) => {
    res.render('auth/login');
};

const getRegisterView = async (req, res) => {
    res.render('auth/register');
};

const register = async (req, res) => {
    const userData = new UserAddDto(req.body);
    const result = await authService.register(userData);

    if (result.success) {
        res.redirect('/auth/login');
    } else {
        res.render('auth/register', { error: result.message });
    }
};

const login = async (req, res) => {
    const userLoginDto = new UserLoginDto(req.body);
    const result = await authService.login(userLoginDto);

    if (result.success) {
        res.redirect('/dashboard/home');
    } else {
        res.render('auth/login', { error: result.message });
    }
};

module.exports = {
    getLoginView,
    getRegisterView,
    register,
    login
};