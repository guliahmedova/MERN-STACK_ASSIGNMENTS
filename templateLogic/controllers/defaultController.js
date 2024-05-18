const fs = require('fs');
const { getRootPath } = require('../utils/routPath');
const path = require('path');
const ejs = require('ejs');

const getDefaultPage = (req, res) => {
    const htmlFilePath = path.join(getRootPath(), "views", "pages" , "index.ejs");

    fs.readFile(htmlFilePath, "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal server error");
        };

        const renderedHtml = ejs.render(data, { rootPath: getRootPath() });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(renderedHtml);
    });
};

module.exports = { getDefaultPage };