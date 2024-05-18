const fs = require('fs');
const { getRootPath } = require('../utils/routPath');
const path = require('path');
const ejs = require('ejs');
const blogService = require('../services/blog-service');

const getBlogPage = async (req, res) => {
    const ejsFilePath = path.join(getRootPath(), "views", "pages", "blog.ejs");
    const blogs = await blogService.getAllBlogs();

    fs.readFile(ejsFilePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal server error");
        };

        const datas = {
            rootPath: getRootPath(),
            blogs: blogs
        };

        const renderedHtml = ejs.render(data, datas);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(renderedHtml);
    });
};

const getBlogDetailPage = async (req, res) => {
    const ejsFilePath = path.join(getRootPath(), "views", "pages", "blogDetail.ejs");
    const blogs = await blogService.getAllBlogs();

    const { url } = req;
    const id = url.split('/')[3];
    const blog = blogs?.find((b) => b.id == id);

    fs.readFile(ejsFilePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal server error");
        };

        const datas = {
            rootPath: getRootPath(),
            blog: blog && blog
        };

        const renderedHtml = ejs.render(data, datas);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(renderedHtml);
    });
};

module.exports = { getBlogPage, getBlogDetailPage };