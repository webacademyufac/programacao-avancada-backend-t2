const http = require('http');
const data = require('./urls.json');
const URL = require('url');

http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
    
    if(!name || !url) {
        return res.end('show')
    }
    if(del) {
        return res.end('delete')
    }
    return res.end('create')
}).listen(3000, () => {console.log("API is running")});