const os = require('os')
const log = require('./logger')
const date = new Date

const { freemem, totalmem } = os

setInterval(() => {
    const totalMem = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)

    const usage = totalMem - freeMem
    const percents = parseInt((usage/totalMem) * 100)

    const stats = {
        date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        total: `${totalMem} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents}% em uso`
    }

    console.clear()
    console.log('++++++ MEMORY STATS ++++++')
    console.table(stats)

    // envia o status atual para o registrador
    log('Rodando...', JSON.stringify(stats))

}, 1000)