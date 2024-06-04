const http = require('http');
const router = require('./routes/router');
const useCors = require('./middlewares/cors-middleware');

const PORT = 5678;

const server = http.createServer((req, res) => {
    useCors(req, res, () => {
        router.handleRoutes(req, res);
    });
});

server.listen(PORT, () => {
    console.log(`server listens port: ${PORT}`);
});