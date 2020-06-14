const http = require('http');
const PORT = 8000;
const handlers = require('./handlers');

http.createServer((req, res) => {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(PORT);

console.log("Server running!");