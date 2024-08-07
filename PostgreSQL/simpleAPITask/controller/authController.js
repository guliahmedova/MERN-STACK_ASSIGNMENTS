const authService = require('../services/auth-service');

const loginUser = async (req, res) => {
    const user = req.body
    const result = await authService.loginUser(user)
    res.json(result)
}

const addUser = async (req, res) => {
    const user = await authService.addUser(req.body)
    res.json(user)
}

module.exports = {
    loginUser,
    addUser
}