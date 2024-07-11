const studentController = require('../controllers/student-controller');
const express = require('express');
const router = express.Router();

router.get('/students', studentController.getAllStudents);
router.post('/students/hier/:id', studentController.getStudentByHier);
router.post('/addStudent', studentController.addStudent);

module.exports = router;