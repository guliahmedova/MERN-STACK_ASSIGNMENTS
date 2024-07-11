const pool = require('../config/db');
const Student = require('../models/student');

const getAllStudent = async () => {
    const res = await pool.query('SELECT * FROM students');
    return Student.mapAll(res.rows);
};

const getStudentById = async id => {
    const res = await pool.query('select * from students s where s.id = $1 and s.deleted = false', [id]);
    return Student.mapOne(res.rows[0]);
};

const getStudentByHier = async id => {
    const res = await pool.query('SELECT * FROM FUNC_GETSTUDENTHIER($1);', [id]);
    return Student.mapAll(res.rows);
};

const addStudent = async student => {
    await pool.query(`CALL ADD_STUDENT($1, $2, $3, $4);`, [student.name, student.age, student.grade, student.enrollmentDate]);
};

const deleteStudent = async id => {
    await pool.query(`CALL DELETE_STUDENT ($1, $2, $3, $4);`, [student.name, student.age, student.grade, student.enrollmentDate]);
};

module.exports = {
    getAllStudent,
    getStudentById,
    getStudentByHier,
    addStudent,
    deleteStudent
}; 

// CREATE OR REPLACE PROCEDURE ADD_STUDENT (
//     p_name TEXT,
//     p_age INTEGER,
//     p_grade TEXT,
//     p_enrollment_date DATE
// )
// LANGUAGE plpgsql
// AS $$
// 	DECLARE
// BEGIN
//     INSERT INTO students (name, age, grade, enrollment_date)
//     VALUES (p_name, p_age, p_grade, p_enrollment_date);
// END;
// $$;

// -- CREATE OR REPLACE PROCEDURE UPDATE_STUDENT (
// --     p_student_id INTEGER,
// --     p_name TEXT,
// --     p_age INTEGER,
// --     p_grade TEXT,
// --     p_enrollment_date DATE
// -- )
// -- LANGUAGE plpgsql
// -- AS $$
// -- 	DECLARE
// -- BEGIN
// --     UPDATE students
// --     SET name = p_name,
// --         age = p_age,
// --         grade = p_grade,
// --         enrollment_date = p_enrollment_date
// --     WHERE id = p_student_id;
// -- END;
// -- $$;

// -- ALTER TABLE students
// -- ADD deleted BOOLEAN DEFAULT FALSE;

// -- CREATE OR REPLACE PROCEDURE DELETE_STUDENT (
// --     p_student_id INTEGER
// -- )
// -- LANGUAGE plpgsql
// -- AS $$
// -- BEGIN
// --     UPDATE students
// --     SET deleted = TRUE
// --     WHERE id = p_student_id;
// -- END;
// -- $$;


// SELECT * FROM students;









// -- CALL ADD_STUDENT('Alice Smith', 16, 'Grade 10', '2023-08-21');





