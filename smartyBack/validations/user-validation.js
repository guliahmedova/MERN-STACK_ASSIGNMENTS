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
    if (user?.firstname === '') {
        return new ValidationResult(false, generateNotNullMessage("firstname"));
    };

    return new ValidationResult(true);
};

const checkUserNameMinMax = (user) => {
    if (user?.firstname.length < 5 || user?.firstname.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("firstname", 5, 20))
    };

    return new ValidationResult(true);
};

const checkFullNameotNull = (user) => {
    if (user?.lastname === '') {
        return new ValidationResult(false, generateNotNullMessage("lastname"));
    };

    return new ValidationResult(true);
};

const checkFullNameMinMax = (user) => {
    if (user?.lastname.length < 5 || user?.lastname.length > 20) {
        return new ValidationResult(false, generateMaxMinLengthMessage("lastname", 5, 20))
    };

    return new ValidationResult(true);
};

module.exports = { userValidate };