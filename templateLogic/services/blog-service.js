const baseService = require('./base-service');

async function getAllBlogs() {
    const result = await baseService.getAllJsonData();
    return result.blogs;
};

module.exports = { getAllBlogs };