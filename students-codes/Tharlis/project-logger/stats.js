const os = require('os')
const log = require('./logger')

const { freemem, totalmem} = os

setInterval( () => {
    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)
    const usage = total - freeMem
    const percent = parseInt(((usage/total) * 100))
    const date = new Date()

    const status = {
        'total': `${total} MB`,
        'freeMem': `${freeMem} MB`,
        'porcent': `${percent}% em uso`,
        'data': `dia: ${date.getDay()} do mês ${date.getMonth()} ano ${date.getFullYear()}`,
        'hora': `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    console.clear()
    console.table(status)


    //
    log('Rodando...\n', JSON.stringify(status)+'\n')

}, 1000)

