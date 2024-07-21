const express = require('express');
const router = express.Router();

const blogRoute = require('./blog-route');
const authRoute = require('./auth-route');
const adminRoute = require('./admin-route');

router.use('/', blogRoute);
router.use('/auth', authRoute);
router.use('/dashboard', adminRoute);

module.exports = router;