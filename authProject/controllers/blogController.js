const getBlogPage = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Blog Page</h1>");
};

const getBlogDetailPage = (req, res, id) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Blog Page, ID: ${id}</h1>`);
};

module.exports = { getBlogPage, getBlogDetailPage };