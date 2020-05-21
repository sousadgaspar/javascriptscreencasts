const Http = require('http');

const server = Http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
        <h1>Hello!</h1>
        <p>You asked for <code>${request.url}</code></p>
    `);
    response.end();
});

server.listen(8090);
console.log("Listening on port 8090");