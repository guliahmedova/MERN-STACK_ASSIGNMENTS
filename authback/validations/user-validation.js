const { ValidationResult } = require('./validation-result');
const { generateNotNullMessage, generateMaxMinLengthMessage } = require('./messages/base-message');
const result = require('../utils/results/result');
const { validationResultHelper } = require('../utils/common');

const userValidate = (user) => {
    const validationResult = validationResultHelper(
        checkFullNameotNull(user),
        checkFullNameMinMax(user),
        checkUserNameNotNull(user),
        checkUserNameMinMax(user)
    );

    if (validationResult == null) return new result.SuccessResult();
    return new result.ErrorResult(validationResult.message);
};

const checkUserNameNotNull = (user) => {
    if (user?.userName === '') {
        return new ValidationResult(false, generateNotNullMessage("UserName"));
    };

    return new ValidationResult(true);
};

const checkUserNameMinMax = (user) => {
    if (user?.userName.length < 5 || user?.userName.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("UserName", 5, 20))
    };

    return new ValidationResult(true);
};

const checkFullNameotNull = (user) => {
    if (user?.fullName === '') {
        return new ValidationResult(false, generateNotNullMessage("FullName"));
    };

    return new ValidationResult(true);
};

const checkFullNameMinMax = (user) => {
    if (user?.fullName.length < 5 || user?.fullName.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("FullName", 5, 20))
    };

    return new ValidationResult(true);
};

module.exports = { userValidate };