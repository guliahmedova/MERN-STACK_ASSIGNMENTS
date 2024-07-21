const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog-controller');

router.get('/', blogController.getBlogView);
router.get('/:id', blogController.getBlogDetailView);

module.exports = router;