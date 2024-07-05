const express = require('express');
const dotenv = require('dotenv');
const teacherController = require('./controllers/teacher-controller');
const studentController = require('./controllers/student-controller');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3002;

app.use(express.static('public'));

app.get('/', (req, res) => { 
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/teachers', teacherController.getAllTeachers);
app.get('/students', studentController.getAllStudents);

app.listen(PORT, () => {
    console.log('serves listens port: ', PORT);
});