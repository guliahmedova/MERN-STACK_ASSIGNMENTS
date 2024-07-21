const pool = require('../config/db');
const Blog = require('../models/blog');
const { GET_SUCCESS } = require('../utils/constants/messages');
const { SuccessResult } = require('../utils/results/result');

const getAllBlogs = async () => {
    const res = await pool.query('SELECT * FROM blogs b WHERE b.deleted = 0');
    return new SuccessResult(GET_SUCCESS, Blog.mapAll(res.rows));
};

const getBlogById = async (id) => {
    const res = await pool.query('select * from blogs b where b.id = $1 and b.deleted = 0', [id]);
    return new SuccessResult(GET_SUCCESS, Blog.mapOne(res.rows[0]));
};

module.exports = {
    getAllBlogs,
    getBlogById,
};