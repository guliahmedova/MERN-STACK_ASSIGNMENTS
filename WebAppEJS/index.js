const http = require('http');
const ROUTES = require('./routes/routes');

const PORT = 4545;

const server = http.createServer((req, res) => {
    handleDynamicRoutes(req, res);
});

const handleDynamicRoutes = (req, res) => {
    let found = false;

    for (const handler of ROUTES) {
        if (handler(req, res)) {
            found = true;
            break;
        }
    }

    const showErrorMsg = () => {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found!");
    };

    if (!found) {
        showErrorMsg(req, res);
    }
};

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});