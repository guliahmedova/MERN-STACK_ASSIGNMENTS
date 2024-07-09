const orderService = require('../services/order-service');

const getAllOrders = async (req, res) => {
    const data = await orderService.getAllOrders();
    res.send(JSON.stringify(data, null, 2));
};

const getAllOrdersWithDetails = async (req, res) => {
    try {
        const orders = await orderService.getAllOrdersWithDetails();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
};

module.exports = {
    getAllOrders,
    getAllOrdersWithDetails
};