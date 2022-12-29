function desafio(){
    const date = new Date()
    console.log(`a hora é: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
setTimeout(desafio, 5000)
setInterval(desafio, 5000)
setTimeout(desafio, 5000)
setInterval(desafio, 5000)