const express = require('express');
const dotenv = require('dotenv');
const categoryRouter = require('./routes/category-route');
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3002;

app.use('/categories', categoryRouter);

app.listen(PORT, () => {
    console.log('serves listens port: ', PORT);
});