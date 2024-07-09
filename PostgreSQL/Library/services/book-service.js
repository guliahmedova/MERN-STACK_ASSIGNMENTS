const pool = require('../config/db'); 
const Book = require('../models/Book'); 

const getAllBooks = async () => {
    const res = await pool.query('SELECT * FROM books');
    return Book.mapAll(res.rows);
};

module.exports = {
    getAllBooks
};
