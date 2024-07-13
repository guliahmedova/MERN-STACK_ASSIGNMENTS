const userService = require('../services/user-service');
const UserAddDto = require('../models/userAdd');

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers();
    res.json(result);
};

const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await userService.getUser(id);
    res.json(result);
};

const getUserByStatus = async (req, res) => {
    const { status } = req.params;
    const { id } = req.params;
    const result = await userService.getUserByStatus(status, id);
    res.json(result);
};

const getUsersByStatus = async (req, res) => {
    const { status } = req.params;
    const result = await userService.getUsersByStatus(status);
    res.json(result);
};

const getUserByUsername = async (req, res) => {
    const { username } = req.params;
    const result = await userService.getUserByUsername(username);
    res.json(result);
};

const addUser = async (req, res) => {
    const userData = new UserAddDto(req.body);
    const result = await userService.addUser(userData);
    res.json(result);
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = { id, ...req.body }; 
    await userService.updateUser(user);
    res.status(200).json({ message: "User has been updated successfully" });
};

const deleteUser = async (req, res) => {
    const result = await userService.deleteUser(req.params.id);
    res.json(result);
};

module.exports = {
    getAllUsers,
    getUser,
    getUserByStatus,
    getUsersByStatus,
    getUserByUsername,
    addUser,
    updateUser,
    deleteUser
};