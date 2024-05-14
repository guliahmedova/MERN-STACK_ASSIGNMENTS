class User {
    constructor(email, fullName, userName, password, isActive) {
        this.email = email;
        this.fullName = fullName;
        this.userName = userName;
        this.password = password;
        this.isActive = isActive; // flag
    };
};

module.exports = User;