const http = require('http');
const mongoose = require('mongoose');
const PORT = 3000;

mongoose.connect('mongodb+srv://guli:guli@cluster0.fu1btpf.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')

    .then(() => { console.log('connect'); }).catch(err => { console.log('something wrong', err); });
const movie = new mongoose.Schema({
    name: String
});
const Movie = mongoose.model('Movie', movie);

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/movies') {
        try {
            const movieList = await Movie.find();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(movieList));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Server error' }));
        }
    } else if (req.method === 'POST' && req.url === '/movies') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { name } = JSON.parse(body);
                const newMovie = new Movie({ name });
                const savedMovie = await newMovie.save();
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(savedMovie));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid data' }));
            }
        });
    } else if (req.method === 'PUT' && req.url.startsWith('/movies/')) {
        const id = req.url.split('/').pop();
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const { name } = JSON.parse(body);
                const updatedMovie = await Movie.findByIdAndUpdate(id, { name }, { new: true });
                if (updatedMovie) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(updatedMovie));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Movie not found' }));
                }
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid data' }));
            }
        });
    } else if (req.method === 'DELETE' && req.url.startsWith('/movies/')) {
        const id = req.url.split('/').pop();
        try {
            const deletedMovie = await Movie.findByIdAndDelete(id);
            if (deletedMovie) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Movie deleted' }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Movie not found' }));
            }
        } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Invalid data' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Endpoint not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
});