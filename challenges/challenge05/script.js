function callback_desafio() {
    const data = new Date()

    h = data.getHours()
    m = data.getMinutes()
    s = data.getSeconds()

    const desafio = "horario:  " + h + ":" + m + ":" + s

    console.log(desafio)
}

setTimeout(() => callback_desafio(), 5000)/*depois de 5 segundos do comando de execução do codigo a função foi executada, graças ao setTimeout*/

setInterval(() => callback_desafio(), 5000)/*depois de 5 segundos do comando de execução do codigo a função foi executada e ficou sendo executando de 5 em 5 segundos até o codigo ser interrompido a força, graças ao setInterval*/
