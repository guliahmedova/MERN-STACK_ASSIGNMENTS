const studentService = require('../services/student-service');

const getAllStudents = async (req, res) => {
    const data = await studentService.getAllStudent();
    res.send(JSON.stringify(data, null, 2));
};

module.exports = {
    getAllStudents
};