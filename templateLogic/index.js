const http = require('http');
const { handleRoutes } = require('./routers/router');
const { useAllStaticFiles } = require('./middlewares/staticFileMiddleware');
const PORT = 5555;

const server = http.createServer((req, res) => {
    useAllStaticFiles(req, res, () => {
        handleRoutes(req, res);
    });
});

server.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
}); 