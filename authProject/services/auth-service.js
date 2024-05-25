const baseService = require("../services/base-service");
const bcyrpt = require('bcrypt');

async function signUp(model) {
    console.log(`signUp auth service model: ${model}`);
    const saltRounds = 10;
    const saltKey = await bcyrpt.genSalt(saltRounds);
    model.password = await bcyrpt.hash(model.password, saltKey);

    const data = await baseService.signUp("users", model);
    return data;
};

module.exports = { signUp };