const pool = require('../config/db');

const getBooks = async () => {
    const result = await pool.query('SELECT * FROM books')
    return result.rows
};

const getBookById = async (id) => {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id])
    return result.rows[0]
};

const addBook = async (book) => {
    const result = await pool.query('INSERT INTO books (title, author,published_date,isbn) VALUES ($1, $2,$3,$4) RETURNING *', [book.title, book.author, book.published_date, book.isbn])
    return result.rows[0]
};

const editBook = async (id, book) => {
    const result = await pool.query('UPDATE books SET title = $1, author = $2, published_date = $3, isbn = $4 WHERE id = $5 RETURNING *', [book.title, book.author,book.published_date,book.isbn, id])
    return result.rows[0]
};

const deleteBook = async (id) => {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id])
    return result.rows[0]
};

module.exports = {
    getBooks,
    getBookById,
    addBook,
    editBook,
    deleteBook
};