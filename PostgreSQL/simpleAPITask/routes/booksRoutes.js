const bookController = require('../controller/booksController')
const express = require('express')
const router = express.Router()

router.get('/', bookController.getBooks)
router.get('/:id', bookController.getBookById)
router.put('/:id', bookController.editBook)
router.post('/', bookController.addBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router;