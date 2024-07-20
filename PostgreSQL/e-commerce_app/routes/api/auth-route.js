const authController = require('../../controller/api/auth-controller');
const express = require('express');
const router = express.Router();

router.post('/login', authController.login);

module.exports = router;