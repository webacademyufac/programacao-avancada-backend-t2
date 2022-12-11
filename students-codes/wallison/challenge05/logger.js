const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

// escutador
emitter.on('log', (message, object) => {
    fs.appendFile(
        path.join(__dirname, 'log.txt'), 
        object+'\n', 
        (err) => { 
            if(err) throw err 
        })
    console.log(message)
})

// disparador
function log(message, object) {
    emitter.emit('log', message, object)
}

module.exports = log