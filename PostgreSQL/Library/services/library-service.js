const pool = require('../config/db');
const Library = require('../models/library');

const getAllLibraries = async () => {
    const res = await pool.query('SELECT * FROM library');
    return Library.mapAll(res.rows);
};

module.exports = {
    getAllLibraries
};
