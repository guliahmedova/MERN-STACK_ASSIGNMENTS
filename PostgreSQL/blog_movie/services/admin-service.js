const pool = require('../config/db');
const Blog = require('../models/blog');
const { CREATE_SUCCESS, GET_SUCCESS, UPDATE_SUCCESS, DELETE_SUCCESS } = require('../utils/constants/messages');
const { SuccessResult } = require('../utils/results/result');

const getAllBlogs = async () => {
    const res = await pool.query('SELECT * FROM blogs b WHERE b.deleted = 0');
    return new SuccessResult(GET_SUCCESS, Blog.mapAll(res.rows));
};

const getBlogById = async (id) => {
    const res = await pool.query('select * from blogs b where b.id = $1 and b.deleted = 0', [id]);
    return new SuccessResult(GET_SUCCESS, Blog.mapOne(res.rows[0]));
};

const createBlog = async (blog) => {
    const res = await pool.query('INSERT INTO blogs (title, subtitle) VALUES ($1, $2) RETURNING *', [blog.title, blog.subtitle]);
    return new SuccessResult(CREATE_SUCCESS, res.rows[0]);
};

const updateBlog = async (blog) => {
    const res = await pool.query('UPDATE blogs SET title = $1, subtitle = $2 WHERE id = $3 RETURNING *', [blog.title, blog.subtitle, blog.id]);
    return new SuccessResult(UPDATE_SUCCESS, res.rows[0]);
};

const deleteBlog = async id => {
    const res = await pool.query('UPDATE blogs SET deleted = 1 WHERE id = $1 RETURNING *', [id]);
    return new SuccessResult(DELETE_SUCCESS, res.rows[0]);
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};