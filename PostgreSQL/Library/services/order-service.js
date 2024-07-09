const pool = require('../config/db');
const Order = require('../models/Order');
const Book = require('../models/Book');
const User = require('../models/User');

const getAllOrders = async () => {
    const res = await pool.query('SELECT * FROM orders');
    return Order.mapAll(res.rows);
};

const getAllOrdersWithDetails = async () => {
    const query = `
        SELECT 
            orders.id AS order_id,
            orders.borrow_date,
            orders.return_date,
            books.id AS book_id,
            books.title AS book_title,
            users.id AS user_id,
            users.username AS user_username
        FROM orders
        INNER JOIN books ON orders.book_id = books.id
        INNER JOIN users ON orders.user_id = users.id
    `;
    const res = await pool.query(query);
    return res.rows.map(row => ({
        order: new Order(row.order_id, row.borrow_date, row.return_date),
        book: new Book(row.book_id, row.book_title),
        user: new User(row.user_id, row.user_username)
    }));
};

module.exports = {
    getAllOrders,
    getAllOrdersWithDetails
};