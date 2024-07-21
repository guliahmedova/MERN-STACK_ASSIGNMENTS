const blogService = require('../services/blog-service');

const getBlogView = async (req, res) => {
    const result = await blogService.getAllBlogs();

    if (result.success) {
        res.render('blog/index', { data: result.data });
    } else {
        res.render('blog/index', { data: [] });
    }
};

const getBlogDetailView = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).send('Invalid blog ID');
    };

    const result = await blogService.getBlogById(id);

    if (result.success) {
        res.render('blog/detail', { data: result.data });
    } else {
        res.render('blog/detail', { data: null });
    }
};

module.exports = {
    getBlogView,
    getBlogDetailView
};