// Importação dos módulos.
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'webacademy'
const dbCollection = 'documents'

const data = { "urls": [] }

async function readMongo() {
    await client.connect()
    const db = client.db(dbName)
    const collection = db.collection(dbCollection)
    data.urls = []
    await collection.find().forEach( doc => {
        let name = doc.name
        let url = doc.url
        data.urls.push({name, url})
    })
    await client.close()
}

async function writeMongo() {
    await client.connect();
    const db = client.db(dbName)
    const collection = db.collection(dbCollection)
    await collection.deleteMany({})
    if(data.urls.length > 0) {
        await collection.insertMany(data.urls)
    }
    await client.close()
}

// Servidor rodando na porta 3000.
http.createServer(async (req, res) => {

    // Desestruturação da query string da URL para obter os valores que estão associados às chaves name, url e del.
    const { name, url, del } = URL.parse(req.url, true).query

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    await readMongo()

    // Mostrar o conteúdo do JSON.

    /* 
       posterior refactoring

       se puder mudar a api mudar para usar somente
       name e não permitir repetição parecido com 
       uma chave única 
    */
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }

    // Delete - apagar do JSON.
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        await writeMongo()
        return res.end("deletado")
    }
    
    // Create - inserir no JSON.
    data.urls.push({name, url})
    await writeMongo()
    return res.end("criado")

}).listen(3000, () => console.log('Api is running.'))