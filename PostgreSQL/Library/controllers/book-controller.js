const bookService = require('../services/book-service');

const getAllBooks = async (req, res) => {
    const data = await bookService.getAllStudents();
    res.send(JSON.stringify(data, null, 2));
};

module.exports = {
    getAllBooks
};