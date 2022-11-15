const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res)=>{
    

    

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public',file)
    
    // pegando a extensão do documento
    const extname = path.extname(filePath)

    // criando um vetor com as extensões permitidas
    const allowedFileTypes = ['.html', '.js', '.css']

    
    const allowed = allowedFileTypes.find(
        (item) => item === extname 
    )

    if(!allowed) return

    // definindo rotas para a aplicação
    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )

}).listen(5000, () => (console.log('Servidor rodando...')))