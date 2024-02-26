const http = require('http');
const serverHandler = require('../app');
const querystring = require('querystring');
const PORT = 3000;
const server = http.createServer(serverHandler);

server.listen(PORT, () => {
    console.log('Server running at port 3000');

})