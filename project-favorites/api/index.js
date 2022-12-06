const http = require('http');
const data = require('./urls.json');
const URL = require('url');

http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
    
    if(!name || !url) {
        console.log(name, url, del)
        return res.end('show')
    }
    if(del) {
        console.log(name, url, del)
        return res.end('delete')
    }
    console.log(name, url, del)
    return res.end('create')
}).listen(3000, () => {console.log("API is running")});