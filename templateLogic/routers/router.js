const { DEFAULT_ENDPOINT, BLOG_ENDPOINT, BLOG_DETAIL_ENDPOINT } = require('../utils/urlHelper');
const generateResponse = require('../utils/generateResponse');
const { handleDefaultRouter } = require('./defaultRouter');
const { handleBlogRouter } = require('./blogRouter');

const handleRoutes = (req, res) => {
    const { url } = req;
    let newUrl = `/${url.split('/')[1]}`;

    switch (newUrl) {
        case DEFAULT_ENDPOINT:
            handleDefaultRouter(req, res);
            break;
        case BLOG_ENDPOINT:
            handleBlogRouter(req, res);
            break;
        default:
            generateResponse(res, 404, { "message": "error" });
            break;
    }
};

module.exports = { handleRoutes };