const http = require('http');
const querystring = require('querystring');

const port = 3000;
const server = http.createServer((req, res) => {
    const method = req.method;
    if (method === 'POST') {
        let postData = '';
        //stream
        req.on('data', chunk => {
            postData += chunk.toString();
        })

        req.on("end",()=>{
            console.log('postData',postData);
            res.end('Data received');
        })

        console.log('post data content type',req.headers['content-type']);
    }
});

server.listen(port, () => {
    console.log('Server running at port 3000');

})