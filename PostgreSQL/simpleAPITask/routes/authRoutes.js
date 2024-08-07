const authController = require('../controller/authController');
const express = require('express')
const router = express.Router()
router.post('/login', authController.loginUser)
router.post('/', authController.addUser)
module.exports = router