const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    } else if (req.url === '/about') {
        res.write('About Page');
        res.end();
    } else {
        res.write('404 Page Not Found');
        res.end();
    }
});

server.listen(5000);
console.log('Server running on port 5000');
