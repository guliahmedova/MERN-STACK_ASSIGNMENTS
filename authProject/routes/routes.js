const defaultHandler = require('./defaultRouter');
const blogHandler = require('./blogRouter');
const authHandler = require('./authRooter');

module.exports = [defaultHandler, blogHandler, authHandler];