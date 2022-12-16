const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb('Operação realizada com sucesso!')
            }
        )
    }

    const {name, url, del } = URL.parse(req.url, true).query
    if(!name || !url)
        return res.end(JSON.stringify(data))

    if(del){
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }
    data.urls.push({name, url})
    return writeFile(message => res.end(message))
  
}).listen(1200, () => console.log('API is runnung.'))

// Criando uma API para servir o frontend, para que os dados não sejam perdidos, esses dados serão mandados para urls.json onde serão armazenadas.