const pool = require('../config/db');
const { GET_SUCCESS, DUPLICATE_USERNAME_ERROR, CREATE_SUCCESS, UPDATE_SUCCESS, DELETE_SUCCESS } = require('../utils/constants/messages');
const { SuccessResult, ErrorResult } = require('../utils/results/result');
const UserValidation = require('../utils/validations/user');
const bcrypt = require('bcryptjs');

const getAllUsers = async () => {
    try {
        const res = await pool.query('SELECT * FROM users u where u.deleted = 0');
        return new SuccessResult(GET_SUCCESS, res.rows);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const getUser = async (id) => {
    try {
        const res = await pool.query('SELECT * FROM users u where u.deleted = 0 and u.id = $1', [id]);
        return new SuccessResult(GET_SUCCESS, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const getUsersByStatus = async (status) => {
    try {
        const res = await pool.query('SELECT * FROM users u where u.deleted = 0 and u.isactive = $1', [status]);
        return new SuccessResult(GET_SUCCESS, res.rows);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const getUserByStatus = async (status, id) => {
    try {
        const res = await pool.query('SELECT * FROM users u where u.deleted = 0 and u.isactive = $1 and u.id = $2', [status, id]);
        return new SuccessResult(GET_SUCCESS, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const getUserByUsername = async username => {
    try {
        const res = await pool.query('SELECT * FROM users u where u.deleted = 0 and u.username = $2', [username]);
        return new SuccessResult(GET_SUCCESS, res.rows[0]);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const addUser = async user => {
    try {
        const validator = new UserValidation(user);
        const validationResult = validator.validate(validator);

        if (!validationResult.isValid) {
            return new ErrorResult(validationResult.toString());
        };

        const usernameResult = await checkUsername(user);

        if (!usernameResult.success) {
            return usernameResult;
        };

        user.password = await bcrypt.hash(user.password, 10);
        const res = await pool.query(`CALL ADD_USER($1, $2, $3);`, [user.username, user.password, user.isactive]);
        const addedUser = await getUserByUsername(user.username);
        return new SuccessResult(CREATE_SUCCESS, addedUser.data);
    } catch (error) {
        return new ErrorResult(error.message);
    }
};

const updateUser = async (user) => {
    const { id, username, password, isactive } = user;
    await pool.query('CALL UPDATE_USER($1, $2, $3, $4);', [id, username, password, isactive]);
};

const checkUsername = async user => {
    const existUser = await getUserByUsername(user.username);
    if (existUser.data) {
        return new ErrorResult(DUPLICATE_USERNAME_ERROR);
    } else {
        return new SuccessResult();
    }
};

const deleteUser = async (id) => {
    await pool.query('CALL DELETE_USER($1);', [id]);
};

module.exports = {
    getAllUsers,
    getUser,
    getUsersByStatus,
    getUserByStatus,
    getUserByUsername,
    addUser,
    updateUser,
    deleteUser
};