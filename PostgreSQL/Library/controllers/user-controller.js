const userService = require('../services/user-service');

const getAllUsers = async (req, res) => {
    const data = await userService.getAllUsers();
    res.send(JSON.stringify(data, null, 2));
};

module.exports = {
    getAllUsers
};
