const EventEmitter = require('events')
const fs = require('fs')

const emitter = new EventEmitter()

emitter.on('log' , (message) => {
    fs.appendFile('./log.txt', message, (err) => {
        if(err) throw err
    })
    console.log(message)
} )

function log(message){
    emitter.emit('log' , message)
}

module.exports = log
