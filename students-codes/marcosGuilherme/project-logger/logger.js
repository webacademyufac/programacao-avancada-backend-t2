const EventsEmitter = require("events")
const fs = require("fs")
const path = require("path")// Usado para deixar o caminho dinâmico para que possa se usar em qualquer sistema operacional

const emitter = new EventsEmitter()

emitter.on("log", (message, objectJson) => {
    fs.appendFile(path.join(__dirname, "log.txt"), objectJson+"\n\n", // Adiciona no final de um arquivo o conteudo
    (err) => {
        if(err) throw err
    })// Tratamento de erros
    console.log(message)
})

function log(message, objectJson){
    emitter.emit("log", message, objectJson)
}

module.exports = log