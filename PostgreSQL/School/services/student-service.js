const pool = require('../config/db');
const Student = require('../models/student');

const getAllStudent = async () => {
    const res = await pool.query('SELECT * FROM students');
    return Student.mapAll(res.rows);
};

module.exports = {
    getAllStudent
};