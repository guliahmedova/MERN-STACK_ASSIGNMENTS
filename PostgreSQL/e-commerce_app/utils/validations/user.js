const BaseValidation = require('./base/base-validation');

class UserValidation extends BaseValidation {
    constructor(user) {
        super();
        this.addValidation(() => this.checkLength(user.username, 3, 50, 'Name must be 3-50 interval', 101))
    }
}

module.exports = UserValidation;