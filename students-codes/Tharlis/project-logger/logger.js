const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message, object)=>{
    fs.appendFile(path.join(__dirname, 'log.txt'), object, (err)=>{if(err) throw err})
    console.log(message)
})

function logger(message, object){
    // fs.appendFile('./log.txt', message, (err)=>{if(err) throw err})
    emitter.emit('log', message, object)
}

module.exports = logger