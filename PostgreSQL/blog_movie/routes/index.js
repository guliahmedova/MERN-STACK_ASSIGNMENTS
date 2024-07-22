const express = require('express');
const router = express.Router();

const blogRoute = require('./blog-route');
const authRoute = require('./auth-route');
const adminRoute = require('./admin-route');

const authUser = require('../middlewares/auth');

router.use('/', blogRoute);
router.use('/auth', authRoute);
router.use('/dashboard', authUser, adminRoute);

module.exports = router;