const bookRouter = require('./booksRoutes');
const authRouter = require('./authRoutes');
const authUser = require('../middleware/authMiddleware')

const express = require('express')
const router = express.Router()

router.use('/books', authUser, bookRouter);
router.use('/auth', authRouter)

module.exports = router