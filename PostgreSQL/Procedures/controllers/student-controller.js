const studentService = require('../services/student-service');

const getAllStudents = async (req, res) => {
    const data = await studentService.getAllStudent();
    res.send(JSON.stringify(data, null, 2));
};

const addStudent = async (req, res) => {
    const studentAddDto = new studentAddDto(req.body);
    await studentService.addStudent(studentAddDto);
    res.status(201).json({ message: "data has been added successfully" });
};

module.exports = {
    getAllStudents,
    addStudent
};