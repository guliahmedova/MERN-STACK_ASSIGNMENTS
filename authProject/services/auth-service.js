const baseService = require("../services/base-service");
const bcyrpt = require('bcrypt');
const { userValidate } = require('../validations/user-validation');
const validatePassword = require('../validations/password-validation');

async function signUp(model) {
    const validationResult = userValidate(model);

    if (!validationResult.success) {
        return validationResult;
    };

    const passwordValidationResult = validatePassword(model?.password);

    if (!passwordValidationResult.success) {
        return passwordValidationResult;
    };

    const saltRounds = 10;
    const saltKey = await bcyrpt.genSalt(saltRounds);
    model.password = await bcyrpt.hash(model.password, saltKey);

    const data = await baseService.signUp("users", model);
    return `Success Sign Up: ${data}`;
};

module.exports = { signUp };