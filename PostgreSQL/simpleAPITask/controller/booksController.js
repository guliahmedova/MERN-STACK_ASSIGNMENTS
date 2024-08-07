const bookService = require('../services/books-service');

const getBooks = async (req, res) => {
    const books = await bookService.getBooks();
    res.json(books);
};

const getBookById = async (req, res) => {
    const book = await bookService.getBookById(req.params.id);
    res.json(book);
};

const addBook = async (req, res) => {
    const book = await bookService.addBook(req.body)
    res.json(book);
    res.status(201).json({ message: 'Data Added Succesfully' });
};

const editBook = async (req, res) => {
    const book = await bookService.editBook(req.params.id, req.body);
    res.json(book);
};

const deleteBook = async (req, res) => {
    const book = await bookService.deleteBook(req.params.id);
    res.json(book);
};

module.exports = {
    getBooks,
    getBookById,
    addBook,
    editBook,
    deleteBook
};