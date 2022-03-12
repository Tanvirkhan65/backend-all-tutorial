/* Title:Uptime monitoring system
description:This is a simple uptime monitoring system.
*/
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
// app scaffolding
const app = {};
// app configuration
app.config = {
    port: 3000,
};
// app create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Server running at http://localhost:${app.config.port}`);
    });
};
app.handleReqRes = (req, res) => {
    // request handling
    // get the parseURL
    const parseURL = url.parse(req.url, true);
    const path = parseURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseURL.query;
    const { headers } = req;
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    res.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        console.log(JSON.parse(realData));
        res.end('Hello World!');
    });
    console.log(parseURL);
    console.log(path);
    console.log(trimmedPath);
    console.log(method);
    console.log(queryStringObject);
    console.log(headers);
};
app.createServer();
