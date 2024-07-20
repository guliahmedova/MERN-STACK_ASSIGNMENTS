const UserLoginDto = require('../../models/userLogin');
const authService = require('../../services/auth-service');

const login = async (req, res) => {
    const userLoginDto = new UserLoginDto(req.body);
    const result = await authService.login(userLoginDto);

    if (!result.success) {
        res.status(400).json(result);
    } else {
        res.status(200).json(result);
    }
};

module.exports = {
    login
};