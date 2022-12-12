const EventEmitter = require('events') //tem que ser assim
const fs = require('fs')
const path = require('path')
const emitter = new EventEmitter()
emitter.on('log', (message, object)=>{//o que estou esperando o que faz
    const date = new Date()
    const dia = date.getDate()
    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds()
    fs.appendFile(path.join(__dirname,'log.txt'), dia+ ' '+hora+' '+minuto+' ' + segundo + ' '+
        object+'\n', 
        (err)=>{
            if(err) throw err
        })//escreve no fim do documento tratamento de erro é meio padrão
    //o ponto indica que é nessa pasta
    console.log(message)
})

//javaScript só exporta função por isso a necessidade disso aqui
function log(message, object){
    emitter.emit('log', message, object)
}
//para faze essa exportação utilizamos o module
module.exports = log
