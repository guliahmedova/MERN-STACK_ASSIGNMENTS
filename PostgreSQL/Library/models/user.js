class User {
    constructor(id, username, email, password, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    static mapAll(dbRows) {
        const users = [];
        for (const row of dbRows) {
            const user = new User(row);
            users.push(user);
        }
        return users;
    }
}

module.exports = User;
