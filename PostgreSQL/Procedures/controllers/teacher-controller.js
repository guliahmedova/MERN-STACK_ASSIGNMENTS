const teacherService = require('../services/teacher-service');

const getAllTeachers = async (req, res) => {
    const data = await teacherService.getAllTeachers();
    res.send(JSON.stringify(data, null, 2));
};

module.exports = {
    getAllTeachers
};