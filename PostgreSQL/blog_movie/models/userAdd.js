class UserAddDto {
    constructor(data) {
        this.username = data.username;
        this.password = data.password;
        this.isactive = data.isactive || true; 
    }
}

module.exports = UserAddDto;
