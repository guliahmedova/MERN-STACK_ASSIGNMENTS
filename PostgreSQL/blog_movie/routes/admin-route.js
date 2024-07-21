const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin-controller');

router.get('/home', adminController.getAdminView);

router.get('/add', adminController.getBlogAddView);
router.post('/add', adminController.createBlog);

router.get('/edit/:id', adminController.getBlogEditView); 
router.put('/edit/:id', adminController.editBlog);

module.exports = router;