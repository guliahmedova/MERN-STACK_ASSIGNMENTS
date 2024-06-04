class User {
    constructor(email, firstname, lastname, password, confirmpassword) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.confirmpassword = confirmpassword;
    };
};

module.exports = User;