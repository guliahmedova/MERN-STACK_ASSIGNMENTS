const { PRODUCT_ENDPOINT } = require('../utils/urlHelper');
const { getProductPage } = require('../controllers/productController');

const handleProductRouter = (req, res) => {
    const { url } = req;

    switch (url) {
        case PRODUCT_ENDPOINT:
            getProductPage(req, res);
            break;
    };
};

module.exports = { handleProductRouter };