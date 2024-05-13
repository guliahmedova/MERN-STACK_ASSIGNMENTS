const ENDPOINTS = require('../helpers/urlhelper');
const brandRouter = require('./brandRouter');
const generateRes = require('../helpers/resGenerator');

const handleRoutes = (req, res) => {
    const { url } = req;

    let newUrl = `/${url.split('/')[1]}`

    switch (newUrl) {
        case ENDPOINTS.DEFAULT_ENDPOINT:
            console.log("home page");
            break;
        case ENDPOINTS.BRAND_ENDPOINT:
            brandRouter.handleBrandRoutes(req, res);
            break;
        default:
            generateRes(res, 404, { "message": "error" });
            break;
    }
};

module.exports = { handleRoutes };