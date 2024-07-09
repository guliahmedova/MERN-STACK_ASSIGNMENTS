class Library {
    constructor(id, name, location, establishedDate) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.establishedDate = establishedDate;
    }

    static mapAll(dbRows) {
        const libraries = [];
        for (const row of dbRows) {
            const library = new Library(row);
            libraries.push(library);
        }
        return libraries;
    }
}

module.exports = Library;