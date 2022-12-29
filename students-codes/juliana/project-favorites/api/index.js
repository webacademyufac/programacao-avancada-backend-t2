const data = require('./urls.json')
const URL = require('url')
const http = require('http')
const fs = require('fs')
const path = require('path')
function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err
            cb('Operação realizada com sucesso!')
        }
    )
}
http.createServer((req, res) => {
    // res.end(JSON.stringify(data))
    const {name, url, del} = URL.parse(req.url, true).query//query diz que quero o conteúdo que vem após a interrogação
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })
    //ATENÇÃO A função pode vim AQUI
    //Mostra o conteudo no JSON
    if(!name || !url)
        return res.end(JSON.stringify(data))
    
    //Delete - apagar do JSON
    if(del){
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message=>res.end(message))
    }
    data.urls.push({name, url})
    return writeFile(message => res.end(message))
    
}).listen(3000, () => console.log('API is running'))

