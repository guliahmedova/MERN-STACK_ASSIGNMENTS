class Category {
    constructor(row) {
        this.id = row.id;
        this.code = row.code;
        this.name = row.name;
        this.parentId = row.parentId;
        this.deleted = row.deleted;
    }

    static mapAll(dbRows) {
        const categories = [];
        for (const row of dbRows) {
            const category = new Category(row);
            categories.push(category);
        }
        return categories;
    };

    static mapOne(row) {
        const category = new Category(row);
        return category;
    };
};

module.exports = Category;