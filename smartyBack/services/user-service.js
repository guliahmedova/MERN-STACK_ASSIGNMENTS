const baseService = require('./base-service');
const { JSON_MODEL_KEYS } = require('../utils/enums');
const { userValidate } = require('../validations/user-validation');
const result = require('../utils/results/result');
const validatePassword = require('../validations/password-validation');
const { DATA_ADDED_SUCCESSFULLY } = require('../validations/messages/base-message');
const bcyrpt = require('bcrypt');
const { USERNAME_NOT_FOUND, PASSWORD_INCORRECT, USER_IS_BLOCK, USER_LOGIN_COMPLETE } = require('../validations/messages/user-message');

async function getAllUsers() {
    return await baseService.getData(JSON_MODEL_KEYS.USERS);
};

async function addUser(model) {
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

    const data = await baseService.insertData(JSON_MODEL_KEYS.USERS, model);
    return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data);
};

async function updateUser(id, model) {
    const users = await getAllUsers();

    users?.map((user) => {
        if (user.id == id) {
            user.firstname = model.firstname;
            user.lastname = model.lastname;
            user.email = model.email;
            user.password = model.password;
            user.confirmpassword = model.confirmpassword;
        }
    });

    const data = baseService.updateUser(JSON_MODEL_KEYS.USERS);
    const updatedUser = users.find((user) => user.id == id);

    if (updatedUser) {
        return new result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data);
    } else {
        return new result.ErrorResult("User is not found!");
    }
};

async function verifyUser(user) {
    const users = await baseService.getData(JSON_MODEL_KEYS.USERS);
    const existUser = users?.find((user) => user.email === user.email);
    
    if (existUser === undefined) {
        return new result.ErrorResult(USERNAME_NOT_FOUND);
    };

    const passwordVerifyResult = await bcyrpt.compare(user.password, existUser.password);

    if (!passwordVerifyResult) {
        return new result.ErrorResult(PASSWORD_INCORRECT);
    };
    if (!existUser.isActive) {
        return new result.ErrorResult(USER_IS_BLOCK);
    };

    return new result.SuccessResult(USER_LOGIN_COMPLETE);
};

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    verifyUser
};