class Country {
    constructor(row) {
        this.id = row.id;
        this.sort_code = row.sort_code;
        this.name = row.name;
        this.deleted = row.deleted;
    }

    static mapAll(dbRows) {
        const countries = [];
        for (const row of dbRows) {
            const country = new Country(row);
            countries.push(country);
        }
        return countries;
    };

    static mapOne(row) {
        const country = new Country(row);
        return country;
    };
};

module.exports = Country;