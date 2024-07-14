const express = require('express');
const dotenv = require('dotenv');
const appRouter = require('./routes');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', appRouter);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log('serves listens port: ', PORT);
});