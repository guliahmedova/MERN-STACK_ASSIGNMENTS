const User = require('../models/user');
const _userService = require('../services/user-service');
const parseRequestBody = require('../utils/parser');
const generateRes = require('../utils/generateRes');

async function getAllUsers(req, res) {
    const data = await _userService.getAllUsers();
    generateRes(res, 200, data);
};

async function addUser(req, res) {
    const body = await parseRequestBody(req);
    const user = new User(body.firstname, body.lastname, body.email, body.password, body.confirmpassword);
    const result = await _userService.addUser(user);
    generateRes(res, 201, result);
};

async function updateUser(req, res) {
    const { url } = req;
    let newUrl = `/${url.split('/')[3]}`;
    let id = newUrl.replace("/", "");

    const body = parseRequestBody();
    const existUser = await _userService.updateUser(id, body);

    if (existUser) {
        generateRes(res, 200, existUser);
    } else {
        generateRes(res, 404, { message: "User is not found!" })
    }
};

async function vertifyUserController(req, res) {
    const body = parseRequestBody(req);
    const result = await _userService.verifyUser(body);
    generateRes(res, 200, result);
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    vertifyUserController
};