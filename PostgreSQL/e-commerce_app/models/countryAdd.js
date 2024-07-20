class CountryAddDto {
    constructor(row) {
        this.sort_code = row.sort_code;
        this.name = row.name;
    };
};

module.exports = CountryAddDto;