const http = require('http');
const data = require('./urls.json');
const URL = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    /*
        GET: http://localhost:3000/
        CREATE: http://localhost:3000/?name=linkedin&url=https://www.linkedin.com
        DELETE: http://localhost:3000/?name=linkedin&url=https://www.linkedin.com/&del=1
    */
    const { name, url, del } = URL.parse(req.url, true).query
    
    if(!name || !url) {
        return res.end('show')
    }
    if(del) {
        // TODO implementar metodo DELETE
        return res.end('delete')
    }

    // TODO implementar o metodo CREATE
    return res.end('create')
}).listen(3000, () => {console.log("API is running")});