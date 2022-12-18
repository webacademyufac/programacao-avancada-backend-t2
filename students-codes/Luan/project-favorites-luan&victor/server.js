const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res)=> {
    // res.end(console.log(req))

    
    
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
   
    // pegando a extensão do documento
    const extname = path.extname(filePath)

    // criando um vetor com as extensões permitidas
    const allowedFileTypes = ['.html', '.js', '.css']


    const allowed = allowedFileTypes.find(
        (item) => item === extname
    )
    
    if(!allowed) return
    
    
    // // definindo rotas para a aplicação
    // if(req.url === '/')
    fs.readFile(
        // path.join(__dirname, 'public', 'index.html'), // dirname= pasta onde estou
        filePath,
        (err, content) => {
            if (err) throw err 
                res.end(content)
        }
    )
    //     )
        
    // res.write('<h1>Olá!</h1>')
    // res.end()
}).listen(5000, () => (console.log('Servidor rodando...')))

// método para rodar o servidor na porta 5000 usando res e req
