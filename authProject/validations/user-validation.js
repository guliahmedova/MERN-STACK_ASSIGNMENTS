const { ValidationResult } = require('./validation-result');
const { generateNotNullMessage, generateMaxMinLengthMessage } = require('./messages/base-message');
const result = require('../utils/result/result');
const { validationResultHelper } = require('../utils/common');

const userValidate = (user) => {
    const validationResult = validationResultHelper(
        checkFullNameotNull(user),
        checkFullNameMinMax(user),
        checkusernameNotNull(user),
        checkusernameMinMax(user)
    );

    if (validationResult == null) return new result.SuccessResult();
    return new result.ErrorResult(validationResult.message);
};

const checkusernameNotNull = (user) => {
    if (user?.username === '') {
        return new ValidationResult(false, generateNotNullMessage("username"));
    };

    return new ValidationResult(true);
};

const checkusernameMinMax = (user) => {
    if (user?.username.length < 5 || user?.username.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("username", 5, 20))
    };

    return new ValidationResult(true);
};

const checkFullNameotNull = (user) => {
    if (user?.fullname === '') {
        return new ValidationResult(false, generateNotNullMessage("FullName"));
    };

    return new ValidationResult(true);
};

const checkFullNameMinMax = (user) => {
    if (user?.fullname.length < 5 || user?.fullname.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("FullName", 5, 20))
    };

    return new ValidationResult(true);
};

module.exports = { userValidate };