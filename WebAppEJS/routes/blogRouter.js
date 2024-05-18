const { BLOG_ENDPOINT, BLOG_DETAIL_ENDPOINT } = require('../utils/urlHelper');
const blogController = require('../controllers/blogController');
const Router = require("./router");

const router = new Router();
router.addRoute(BLOG_ENDPOINT, blogController.getBlogPage);
router.addRoute(BLOG_DETAIL_ENDPOINT, blogController.getBlogDetailPage, true);

module.exports = router.handleRoute.bind(router);