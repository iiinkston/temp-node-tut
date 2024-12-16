const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('about page')
    }
    if (req.url === '/error') {
        res.end('error page')
    }
})

server.listen(5001, () => {
    console.log('server listenning on port 5001')
})