const generateNotNullMessage = fieldName => {
    return `${fieldName} is required!`
};

const generateMaxMinLengthMessage = (fieldName, max, min) => {
    return `${fieldName} must be between ${min} and ${max} characters long!`;
};

const DATA_ADDED_SUCCESSFULLY = 'Data has been added successfully!';


module.exports = { generateNotNullMessage, generateMaxMinLengthMessage, DATA_ADDED_SUCCESSFULLY };