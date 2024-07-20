const express = require('express');
const router = express.Router();
const defaultController = require('../../controller/mvc/default-countroller');

router.get('/', defaultController.getDefaultView);

module.exports = router;