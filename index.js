/* eslint-disable no-shadow */
const path = require('path');
const os = require('os');
const fs = require('fs');
const events = require('events');
const School = require('./school');

const emitter = new events.EventEmitter();
const myPath = ' E:/nodejs_backend/index.js';
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem() / 1024 / 1024);
console.log(os.cpus());
console.log(os.type());
fs.writeFileSync('myfile.txt', 'Hello World');
fs.writeFileSync('myfile.txt', ' Hello World 2 ', { flag: 'a' });
// appendFileSync and flag a is same as writeFileSync
// flag a is appendFileSync

fs.appendFileSync('myfile.txt', 'Hello World 3');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log(data);
fs.writeFile('myfile.txt', 'Hello World 4', (err) => {
    if (err) throw err;
    console.log('File Written');
});
fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
emitter.on('bellring', ({ message, time }) => {
    console.log(`${message} at ${time}`);
});

setTimeout(() => {
    emitter.emit('bellring', {
        message: 'Ring Ring',
        time: new Date().toLocaleTimeString(),
    });
}, [2000]);
const school = new School();
school.on('periodStarted', ({ message, time }) => {
    console.log(`${message} at ${time}`);
});
school.startPeriod();
