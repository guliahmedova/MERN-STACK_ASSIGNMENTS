const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');
const { DUPLICATE_USERNAME_ERROR, GET_SUCCESS, CREATE_SUCCESS } = require('../utils/constants/messages');
const { USERNAME_NOT_EXIST_ERROR, USER_DEACTIVE_ERROR, PASSWORD_INCORRECT_ERROR, USER_LOGIN_SUCCESS } = require('../utils/constants/userMessages');
const { ErrorResult, SuccessResult } = require('../utils/results/result');
const UserValidation = require('../utils/validations/user');
const UserLoginDto = require('../models/userLogin');
const AccessToken = require('../utils/auth/access-token');

const getUserByUsername = async username => {
    try {
        const res = await pool.query('SELECT * FROM users WHERE deleted = 0 AND username = $1', [username]);
        return new SuccessResult(GET_SUCCESS, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const checkUsername = async user => {
    const existUser = await getUserByUsername(user.username);
    if (existUser.data) {
        return new ErrorResult(DUPLICATE_USERNAME_ERROR);
    } else {
        return new SuccessResult();
    }
};

const register = async user => {
    try {
        const validator = new UserValidation(user);
        const validationResult = validator.validate();

        if (!validationResult.isValid) {
            return new ErrorResult(validationResult.toString());
        }

        const usernameResult = await checkUsername(user);

        if (!usernameResult.success) {
            return usernameResult;
        }

        user.password = await bcrypt.hash(user.password, 10);
        await pool.query('INSERT INTO users (username, password, isactive) VALUES ($1, $2, $3)', [user.username, user.password, user.isactive]);
        const addedUser = await getUserByUsername(user.username);
        return new SuccessResult(CREATE_SUCCESS, addedUser.data);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};


/**
 * @param {UserLoginDto} userLoginDto
 */
const login = async (userLoginDto) => {
    const existUsername = await getUserByUsername(userLoginDto.username);

    if (!existUsername.data) {
        return new ErrorResult(USERNAME_NOT_EXIST_ERROR);
    };

    if (!existUsername.data.isactive) {
        return new ErrorResult(USER_DEACTIVE_ERROR);
    };

    const passwordResult = await bcrypt.compare(userLoginDto.password, existUsername.data.password);

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
    register,
    login
};
