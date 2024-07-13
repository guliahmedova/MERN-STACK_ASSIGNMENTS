class User {
    constructor(row) {
        this.id = row.id;
        this.code = row.code;
        this.name = row.name;
        this.parentId = row.parentId;
        this.deleted = row.deleted;
    }

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