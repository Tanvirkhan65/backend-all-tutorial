const fs = require('fs');
const http = require('http');

const ourReadStream = fs.createReadStream(`${__dirname}/readMe.txt`, 'utf8');
const ourWriteStream = fs.createWriteStream(`${__dirname}/writeMe.txt`);
ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});
const ourReadStream2 = fs.createReadStream(`${__dirname}/readMe2.txt`, 'utf8');
const ourWriteStream2 = fs.createWriteStream(`${__dirname}/writeMe2.txt`);
ourReadStream2.pipe(ourWriteStream2);
const server = http.createServer((req, res) => {
    const ourReadStreamServer = fs.createReadStream(`${__dirname}/readMe.txt`, 'utf8');
    ourReadStreamServer.pipe(res);
});
server.listen(3000);
