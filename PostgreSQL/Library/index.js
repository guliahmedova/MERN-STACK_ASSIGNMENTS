const express = require('express');
const dotenv = require('dotenv');
const orderController = require('./controllers/order-controller');
const libraryController = require('./controllers/library-controller');
const userController = require('./controllers/user-controller');
const bookController = require('./controllers/book-controller');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3005;

app.get('/orders', orderController.getAllOrders);
app.get('/orders/details', orderController.getAllOrdersWithDetails);
app.get('/libraries', libraryController.getAllLibraries);
app.get('/users', userController.getAllUsers);
app.get('/books', bookController.getAllBooks);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
