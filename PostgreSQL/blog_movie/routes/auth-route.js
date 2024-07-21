const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');

router.get('/login', authController.getLoginView);
router.post('/login', authController.login);

router.get('/register', authController.getRegisterView);
router.post('/register', authController.register);

module.exports = router;
