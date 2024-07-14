const pool = require('../config/db');
const UserLoginDto = require('../models/userLogin');
const AccessToken = require('../utils/auth/access-token');
const { USERNAME_NOT_EXIST_ERROR, USER_DEACTIVE_ERROR, PASSWORD_INCORRECT_ERROR, USER_LOGIN_SUCCESS } = require('../utils/constants/userMessages');
const { ErrorResult, SuccessResult } = require('../utils/results/result');
const userService = require('./user-service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * @param {UserLoginDto} userLoginDto
 */

const login = async (userLoginDto) => {
    const existUsername = await userService.getUserByUsername(userLoginDto.username);

    if (!existUsername.data) {
        return new ErrorResult(USERNAME_NOT_EXIST_ERROR);
    };

    if (!existUsername.data.isactive) {
        return new ErrorResult(USER_DEACTIVE_ERROR);
    };

    console.log('User provided password:', userLoginDto.password);
    console.log('Stored hashed password:', existUsername.data.password);

    const passwordResult = await bcrypt.compare(userLoginDto.password, existUsername.data.password);

    console.log('Password comparison result:', passwordResult);

    if (!passwordResult) {
        return new ErrorResult(PASSWORD_INCORRECT_ERROR);
    };

    const token = await jwt.sign({ username: existUsername.data.username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    const expireDate = new Date();
    expireDate.setHours(expireDate.getHours() + 1);
    const accessToken = new AccessToken(token, expireDate.toString());

    return new SuccessResult(USER_LOGIN_SUCCESS, accessToken);
};

module.exports = {
    login
};