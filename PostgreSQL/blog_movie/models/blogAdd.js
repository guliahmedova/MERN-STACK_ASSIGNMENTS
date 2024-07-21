class BlogAddDto {
    constructor(row) {
        this.title = row.title;
        this.subtitle = row.subtitle;
    }
}

module.exports = BlogAddDto;