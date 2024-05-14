const urlHelper = require('../utils/urlHelper');
const userRouter = require('../routes/user-router');
const generateRes = require('../utils/generateRes');

const handleRoutes = (req, res) => {
    const { url } = req;
   
    let newUrl = `/${url.split('/')[1]}`;

    switch (newUrl) {
        case urlHelper.DEFAULT_ENDPOINT:
            console.log("home page");
            break;
        case urlHelper.USER_ENDPOINT:
            userRouter.handleUserRoutes(req, res);
            break;
        default:
            generateRes(res, 404, { "message": "error" });
    }
};

module.exports = { handleRoutes };