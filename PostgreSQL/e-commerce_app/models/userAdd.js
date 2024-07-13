class UserAddDto {
    constructor(row) {
        this.username = row.username;
        this.password = row.password;
        this.isactive = row.isactive;
    }
}

module.exports = UserAddDto;