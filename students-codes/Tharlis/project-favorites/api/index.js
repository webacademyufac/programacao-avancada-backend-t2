// Importação dos módulos.
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

// Importação do documento urls.json. Nesse momento do código, o conteúdo do documento vai para o objeto data.
const data = require('./urls.json')

// Servidor rodando na porta 3000.
http.createServer((req, res) => {

    // Desestruturação da query string da URL para obter os valores que estão associados às chaves name, url e del.
    const { name, url, del } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin':'*'
    })

    // Mostrar o conteúdo do JSON.
    if (!name || !url)
    return res.end(JSON.stringify(data))
    
    // Delete - apagar do JSON.
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }
    
    function writeFile(cb){
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if(err) throw err 
                cb('Operação realizada com sucesso!')
            }
        )

    }
    
    data.urls.push({name, url})
    return writeFile(message => res.end(message))

}).listen(3000, () => console.log('Api is running.'))