const { DEFAULT_ENDPOINT, CATEGORY_ENDPOINT, PRODUCT_ENDPOINT } = require('../utils/urlHelper');
const generateResponse = require('../utils/generateResponse');
const { handleDefaultRouter } = require('./defaultRouter');
const { handleCategoryRouter } = require('./categoryRouter');
const { handleProductRouter } = require('./productRouter');

const handleRoutes = (req, res) => {
    const { url } = req;
    let newUrl = `/${url.split('/')[1]}`;

    switch (newUrl) {
        case DEFAULT_ENDPOINT:
            handleDefaultRouter(req, res);
            break;
        case PRODUCT_ENDPOINT:
            handleProductRouter(req, res);
            break;
        case CATEGORY_ENDPOINT:
            handleCategoryRouter(req, res);
            break;
        default:
            generateResponse(res, 404, { "message": "error" });
            break;
    }
};

module.exports = { handleRoutes };