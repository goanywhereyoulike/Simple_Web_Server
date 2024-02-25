const http = require('http');
const querystring = require('querystring');

const port = 3000;
const server = http.createServer((req, res) => {
    const method = req.method;
    console.log('method', method);
    const url = req.url;
    console.log('url', url);
    req.query = querystring.parse(url.split('?')[1]);
    console.log(req.query);
    res.end(JSON.stringify(req.query));
});

server.listen(port, () => {
    console.log('Server running at port 3000');

})