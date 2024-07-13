const userController = require('../controller/user-controller');
const express = require('express');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.get('/status/:status', userController.getUsersByStatus);
router.get('/status/:status/:id', userController.getUserByStatus);
router.get('/username/:username', userController.getUserByUsername);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);  
router.delete('/:id', userController.deleteUser); 

module.exports = router;