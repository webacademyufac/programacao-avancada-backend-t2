// Importação dos módulos.
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

// MongoDB Test
const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";
 
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

// Importação do documento urls.json. Nesse momento do código, o conteúdo do documento vai para o objeto data.
const data = require('./urls.json')

// Servidor rodando na porta 3000.
http.createServer((req, res) => {

    // Desestruturação da query string da URL para obter os valores que estão associados às chaves name, url e del.
    const { name, url, del } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb()
            }
        )
    }

    // Mostrar o conteúdo do JSON.
    if (!name || !url)
        return res.end(JSON.stringify(data))

    // Delete - apagar do JSON.
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(() => res.end('Deletado com sucesso!'))
    }

    data.urls.push({name, url})

    return writeFile(() => res.end('Criado com sucesso!'))

}).listen(3000, () => console.log('Api is running.'))