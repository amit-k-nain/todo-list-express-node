const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/html' })
    // const readStream = fs.createReadStream('index.html','utf-8');
    const readStream = fs.createReadStream('test.php','utf-8');

    readStream.pipe(res);
    // res.end(req.url);
});

console.log('port 2000 called');

server.listen(2000,'127.0.0.1');