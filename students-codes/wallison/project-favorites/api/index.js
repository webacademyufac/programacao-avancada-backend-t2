const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

/* importação de urls */
const data = require('./urls.json')

// inicia o event loop
http.createServer((req, res) => {
    // res.end(JSON.stringify(data))
    // console.log(URL.parse(req.url, true).query)

    function writeFile(cb) {
        return fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb('Operação realizada com sucesso!')
            }
        )
    }

    const { name, url, del } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    if(!name || !url) {
        return res.end(JSON.stringify(data))
    }

    if(del) {
        data.urls = data.urls.filter(item => item.url != url)

        return writeFile(message => res.end(message))
        //return res.end('delete')
    }

    /* case create */
    data.urls.push({name, url})
    return writeFile(message => res.end(message))

}).listen(3000, () => console.log('API is running...'))