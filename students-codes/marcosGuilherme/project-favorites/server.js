const http = require('http'); // trabalha com protocolo http
const path = require('path'); // trablha com caminhos
const fs = require('fs'); // trabalha com arquivos


http.createServer((req, res) => {

    
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file) // caminho do arquivo
   //pegando a extensão do documento
    const extname = path.extname(filePath);
    // criando um vetor com as extenções permitidas
    const allowedFileTypes = ['.html', '.js', '.css']

    const allowed = allowedFileTypes.find(
        (item) => item === extname
    )

    if(!allowed) return


    // definindo rotas para o servidor
        fs.readFile( // lendo arquivo index.html e enviando para o cliente (res)
        filePath,    
        (err, content) => { // callback
                if (err) throw err;
                res.end(content); // finaliza a resposta
            }
        )
            
}).listen(3000, () => { // porta 3000
    console.log('Servidor rodando na porta 3000');
});
