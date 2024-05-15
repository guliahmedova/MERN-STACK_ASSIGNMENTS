const { DEFAULT_ENDPOINT } = require('../utils/urlHelper');
const { getDefaultPage } = require('../controllers/defaultController');

const handleDefaultRouter = (req, res) => {
    const { url } = req;

    switch (url) {
        case DEFAULT_ENDPOINT:
            getDefaultPage(req, res);
            break;
    };
};

module.exports = { handleDefaultRouter };