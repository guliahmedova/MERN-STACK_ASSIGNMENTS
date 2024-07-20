const categoryRouter = require('./category-route');
const userRouter = require('./user-route');
const authRouter = require('./auth-route');
const countryRouter = require('./country-route');

const express = require('express');
const router = express.Router();

router.use('/categories', categoryRouter);
router.use('/countries', countryRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);

module.exports = router;