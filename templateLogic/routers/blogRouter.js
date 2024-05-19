const { BLOG_ENDPOINT, BLOG_DETAIL_ENDPOINT } = require('../utils/urlHelper');
const { getBlogPage, getBlogDetailPage } = require('../controllers/blogController');

const handleBlogRouter = (req, res) => {
    const { url } = req;

    switch (url) {
        case BLOG_ENDPOINT:
            getBlogPage(req, res);
            break;
        case BLOG_DETAIL_ENDPOINT:
            getBlogDetailPage(req, res);
            break;
    };
};

module.exports = { handleBlogRouter };