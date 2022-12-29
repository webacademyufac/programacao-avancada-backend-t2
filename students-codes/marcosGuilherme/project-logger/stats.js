const os = require("os")
const log = require("./logger")

setInterval(() => {
    const { freemem, totalmem }  = os

    //Fazendo transformação de bytes para MB
    const total = parseInt(totalmem()/1024/1024)
    const freeMem = parseInt(freemem()/1024/1024)

    const usage = total - freeMem
    const percents = parseInt(usage/total * 100)

    //Pegar data atual, e formatar para padrão usado no brasil
    let date = new Date()
    let day = String(date.getDate()).padStart(2,"0")
    let month = String(date.getMonth() + 1).padStart(1, "0")
    let year = date.getFullYear()
    let dateFormat = day + "/" + month + "/" + year

    //Pegar hora atual, e formatar para padrão usado no brasil
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let hourFormat = hour + ":" + minutes + ":" + seconds

    const stats = {
        memoryTotal : `${total} MB`,
        memoryFree: `${freeMem} MB`,
        percentsMemoryInUSe: `${percents}%`,
        currentDate: `${dateFormat}`,
        currentTime: `${hourFormat}`,
    }

    const statsJson = JSON.stringify(stats)

    console.clear()
    console.log("++++++ MEMORY STATS ++++++")
    console.table(stats)
    //O método log pega dois parâmetros do tipo text, um deles é mostrado no console e o outro que era um objeto que foi transformado em json, esse parâmetro é armazenado em um arquivo text.
    log("LOG - Armazenando no arquivo log.txt",statsJson)
}, 1000)
