const express = require('express');
const dotenv = require('dotenv');
const appRouter = require('./routes/index');
const path = require('path');

dotenv.config();

const app = express();  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', appRouter);

const PORT = process.env.PORT || 3020;

app.listen(PORT, () => {
    console.log('serves listens port: ', PORT);
});