const { BLOG_ENDPOINT } = require('../utils/urlHelper');
const { getBlogPage } = require('../controllers/blogController');

const handleBlogRouter = (req, res) => {
    const { url } = req;

    switch (url) {
        case BLOG_ENDPOINT:
            getBlogPage(req, res);
            break;
    };
};

module.exports = { handleBlogRouter };