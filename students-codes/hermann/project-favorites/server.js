const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res)=>{
    
    // as rotas da aplicação foram definidas de maneira dinâmica
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public',file)
    
    // pegando a extensão do arquivo
    const extname = path.extname(filePath)

    // criando um vetor com as extensões esperadas
    const allowedFileTypes = ['.html', '.js', '.css']

    // varrendo o vetor de extensões permitidas para tentar encontrar algum arquivo com extensão diferente das esperadas 
    const allowed = allowedFileTypes.find(
        (item) => item === extname 
    )

    // se encontrou uma extensão não esperada, retorna, somente para não travar a aplicação
    if(!allowed) return


    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )

}).listen(5000, () => (console.log('Servidor rodando...')))