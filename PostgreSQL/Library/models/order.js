class Order {
    constructor(id, bookId, userId, borrowDate, returnDate, returned) {
        this.id = id;
        this.bookId = bookId;
        this.userId = userId;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
        this.returned = returned;
    }

    static mapAll(dbRows) {
        const orders = [];
        for (const row of dbRows) {
            const order = new Order(row);
            orders.push(order);
        }
        return orders;
    }
}

module.exports = Order;
