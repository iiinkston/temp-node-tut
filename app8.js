const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set default HTTP status code
    res.setHeader('Content-Type', 'text/html'); // Set content type to HTML

    if (req.url === '/') {
        res.end('Welcome to our home page');
        return;
    }

    if (req.url === '/about') {
        res.end('Here is our short history');
        return;
    }

    // Default 404 Response
    res.statusCode = 404;
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <a href="/">Back home</a>
    `);
});

server.listen(5001, () => {
    console.log('Server running on port 5001');
});
