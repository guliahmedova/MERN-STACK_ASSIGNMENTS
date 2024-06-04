const PASSWORD_CONFIG = require('../../utils/password-config');

const PASSWORD_MIN_LENGTH = `Password must be greater than ${PASSWORD_CONFIG.minLength}!`;
const PASSWORD_UPPERCASE = 'Password must contain at least one uppercase!';
const PASSWORD_LOWERCASE = 'Password must contain at least one lowercase!';
const PASSWORD_DIGIT = 'Password must contain at least one digit!';
const PASSWORD_SPECIAL_CHARS = 'Password must contain at least one special character!';
const PASSWORD_SPACE = 'Password must not contain space!';

module.exports = {
    PASSWORD_MIN_LENGTH,
    PASSWORD_UPPERCASE,
    PASSWORD_LOWERCASE,
    PASSWORD_DIGIT,
    PASSWORD_SPECIAL_CHARS,
    PASSWORD_SPACE,
};