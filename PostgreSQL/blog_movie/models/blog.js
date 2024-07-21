class Blog {
    constructor(row) {
        this.id = row.id;
        this.title = row.title;
        this.subtitle = row.subtitle;
        this.deleted = row.deleted;
    };

    static mapAll(dbRows) {
        const blogs = [];
        for (const row of dbRows) {
            const blog = new Blog(row);
            blogs.push(blog);
        }
        return blogs;
    };

    static mapOne(row) {
        return new Blog(row);
    };
};

module.exports = Blog;