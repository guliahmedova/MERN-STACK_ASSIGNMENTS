class User {
    constructor(row) {
        this.id = row.id;
        this.username = row.username;
        this.password = row.password;
        this.deleted = row.deleted;
    };

    static mapAll(dbRows) {
        const users = [];
        for (const row of dbRows) {
            const user = new User(row);
            users.push(user);
        }
        return users;
    };

    static mapOne(row) {
        const user = new User(row);
        return user;
    };
};

module.exports = User;