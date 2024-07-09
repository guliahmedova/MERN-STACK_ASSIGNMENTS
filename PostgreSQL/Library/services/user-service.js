const pool = require('../config/db');
const User = require('../models/User');

const getAllUsers = async () => {
    const res = await pool.query('SELECT * FROM users');
    return User.mapAll(res.rows);
};

module.exports = {
    getAllUsers
};