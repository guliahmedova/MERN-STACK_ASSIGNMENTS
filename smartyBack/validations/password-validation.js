const PASSWORD_CONFIG = require('../utils/password-config');
const { PASSWORD_MIN_LENGTH, PASSWORD_UPPERCASE, PASSWORD_LOWERCASE, PASSWORD_DIGIT, PASSWORD_SPECIAL_CHARS, PASSWORD_SPACE } = require('./messages/password-message');
const { ValidationResult } = require('./validation-result');
const { validationResultHelper } = require('../utils/common');
const { ErrorResult, SuccessResult } = require('../utils/results/result');

const validatePassword = (password) => {
    const result = validationResultHelper(
        checkMinLength(password),
        checkLowerCase(password),
        checkUpperCase(password),
        checkSpecialChars(password),
        checkDigit(password),
        checkSpace(password)
    );

    if (result !== null) return new ErrorResult(result.message);
    return new SuccessResult();
};

const checkMinLength = (password) => {
    if (password?.length < PASSWORD_CONFIG.minLength) {
        return new ValidationResult(false, PASSWORD_MIN_LENGTH);
    };
    return new ValidationResult(true);
};

const checkLowerCase = (password) => {
    if (PASSWORD_CONFIG.isLowerCase && !password?.match(/[a-z]/)) {
        return new ValidationResult(false, PASSWORD_LOWERCASE);
    };

    return new ValidationResult(true);
};

const checkUpperCase = (password) => {
    if (PASSWORD_CONFIG.isUpperCase && !password?.match(/[A-Z]/)) {
        return new ValidationResult(false, PASSWORD_UPPERCASE);
    };

    return new ValidationResult(true);
};

const checkSpecialChars = (password) => {
    if (PASSWORD_CONFIG.isSpecial && !password?.match(/[!@#$%^&*();:]/)) {
        return new ValidationResult(false, PASSWORD_SPECIAL_CHARS);
    };

    return new ValidationResult(true);
};

const checkDigit = (password) => {
    if (PASSWORD_CONFIG.isDigit && !password?.match(/[0-9]/)) {
        return new ValidationResult(false, PASSWORD_DIGIT);
    };

    return new ValidationResult(true);
};

const checkSpace = (password) => {
    if (!PASSWORD_CONFIG.isSpace && !password?.match(/\s/)) {
        return new ValidationResult(false, PASSWORD_SPACE);
    };

    return new ValidationResult(true);
};

module.exports = validatePassword;