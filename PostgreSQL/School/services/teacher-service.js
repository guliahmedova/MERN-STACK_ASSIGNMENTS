const pool = require('../config/db');
const Teacher = require('../models/teacher');

const getAllTeachers = async () => {
    const res = await pool.query('SELECT * FROM teachers');
    return Teacher.mapAll(res.rows);
};

// const init = async () => {
//     const data = await getAllTeachers();
//     console.log('TEACHERS: ', data);
// };

// init();

module.exports = {
    getAllTeachers
};