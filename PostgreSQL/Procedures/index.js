const express = require('express');
const dotenv = require('dotenv');
const teacherController = require('./controllers/teacher-controller');
const studentRouter = require('./routes/student-route');
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/teachers', teacherController.getAllTeachers);
app.use('/students', studentRouter);

app.listen(PORT, () => {
    console.log('serves listens port: ', PORT);
});