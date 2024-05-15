const { CATEGORY_ENDPOINT } = require('../utils/urlHelper');
const { getCategoryPage } = require('../controllers/categoryController');

const handleCategoryRouter = (req, res) => {
    const { url } = req;

    switch (url) {
        case CATEGORY_ENDPOINT:
            getCategoryPage(req, res);
            break;
    };
};

module.exports = { handleCategoryRouter };