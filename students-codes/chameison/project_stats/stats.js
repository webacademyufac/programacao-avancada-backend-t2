const os = require('os')
const log = require('./logger.js')


// console.log(os.userInfo())
// console.log(os.freemem())
// const user = os.userInfo()//informações do usuasiro
// const freMemory = os.freemem()
// const totalM = os.totalmem()
// const infoRedes = os.networkInterfaces()
// const infoPlatform = os.platform()



// console.log(` ${parseInt(freemem()/1024/1024)} MB, ${parseInt(totalmem()/1024/1024/1024)} GB`)

// const all = parseInt(totalmem()/1024/1024/1024)
// const freeMe = parseInt(freemem()/1024/1024/1024)

// const used = all - freeMe
// const porcent = parseInt((used/all) * 100)

// console.log(`A memoria esta com ${porcent} % utilizado`)

// const main = {
//     total: `${all} GB`,
//     livre: `${freeMe} GB`,
//     porcent: `${porcent} % Utilizado`
// }
// console.log("++++++++++++++++++--------------   STATUS DE MEMORIA     ------------++++++++++++++++++++++")
// console.table(main)

setInterval( () => {

    const { freemem, totalmem} = os

    const all = parseInt(totalmem()/1024/1024/1024)
    const freeMe = parseInt(freemem()/1024/1024/1024)

    const used = all - freeMe
    const porcent = parseInt((used/all) * 100)

    // console.log(`A memoria esta com ${porcent} % utilizado`)

    const main = {
        total: `${all} GB`,
        livre: `${freeMe} GB`,
        porcent: `${porcent} % Utilizado`
    }
    console.clear()
    console.log("++++++++++++++++++--------------   STATUS DE MEMORIA     ------------++++++++++++++++++++++")
    console.table(main)

    log('pe de rato', JSON.stringify(main))
}, 1000)

// console.log("++++++++++++++++++--------------   STATUS DE REDE     ------------++++++++++++++++++++++")
// console.log(infoRedes)