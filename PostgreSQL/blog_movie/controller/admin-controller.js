const BlogAddDto = require('../models/blogAdd');
const adminService = require('../services/admin-service');

const getAdminView = async (req, res) => {
    const result = await adminService.getAllBlogs();

    if (result.success) {
        res.render('admin/index', { data: result.data });
    } else {
        res.render('admin/index');
    }
};

const getBlogAddView = async (req, res) => {
    res.render('admin/add');
};

const getBlogEditView = async (req, res) => {
    const result = await adminService.getAllBlogs();
    const { id } = req.params;

    const blog = result.data.find(b => b.id == id);

    console.log("salam", blog);

    if (result.success) {
        res.render('admin/edit', { data: blog });
    } else {
        res.render('admin/edit');
    }
};

const createBlog = async (req, res) => {
    const blogAddDto = new BlogAddDto(req.body);
    console.log('Blog Data:', blogAddDto.title);

    const result = await adminService.createBlog(blogAddDto);

    if (result.success) {
        res.redirect('/dashboard/home');
    } else {
        res.render('dashboard/add', { error: result.message });
    }
};

const editBlog = async (req, res) => {
    const { id } = req.params;
    const blog = { id, ...req.body };
    console.log(blog);
    const result = await adminService.editBlog(blog);

    console.log(result);

    if (result.success) {
        res.redirect('/dashboard/home');
        console.log(result, "if");
    } else {
        console.log(result, "else");
        res.render('admin/edit', { data: blog, error: result.message });
    }
};

const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await adminService.deleteBlog(id);

        if (result.success) {
            res.redirect('/dashboard/home');
        } else {
            res.redirect('/dashboard/home', { error: result.message });
        }
    } catch (error) {
        console.error('Delete Blog Error:', error);
        res.redirect('/dashboard/home', { error: 'An error occurred while deleting the blog.' });
    }
};

module.exports = {
    getAdminView,
    getBlogAddView,
    createBlog,
    getBlogEditView,
    editBlog,
    deleteBlog
};
