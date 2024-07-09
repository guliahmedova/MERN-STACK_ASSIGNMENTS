class Book {
    constructor(id, title, author, isbn, available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = available;
    }

    static mapAll(dbRows) {
        const books = [];
        for (const row of dbRows) {
            const book = new Book(row);
            books.push(book);
        }
        return books;
    }
}

module.exports = Book;