class CategoryAddDto {
    constructor(row) {
        this.code = row.code;
        this.name = row.name;
        this.parent_id = row.parent_id;
    };
};

module.exports = CategoryAddDto;