const http = require('http')
const path = require('path')
const fs = require('fs')
http.createServer((req, res)=>{
    
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath =  path.join(__dirname, 'public', file)

    //pegando a extensão do documento 
    const extname = path.extname(filePath)

    //criando um vetor com as extensões permitidas 
    const allowedFileTypes = ['.html', '.js', '.css']

    const allowed = allowedFileTypes.find(
        (item) => (item === extname)
    )
//se achar o favicon que não é permitido nos arquivos, o return vai fazer não travar a aplicação
    if(!allowed) return 

    //criando rotas
    // if(req.url === '/')
    fs.readFile(
        //junta as parte _dirname é o diretório atual e ele mesmo inclui as barras
        filePath,
        (err, content) =>{
        if(err) throw err
            res.end(content)
        }
    )
    // if(req.url === '/contato')
    //     res.end('<h1>Contato</h1>')
    
   
    // res.write('<h1>Olá!</h1>')
    // res.end()
}).listen(5000, ()=>(console.log('servidor rodando...')))
// listen serve para mandar para uma porta especifica
