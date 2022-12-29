function tempoAtual (){
    const date = new Date()
    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds();

    const stringTempoAtual = `A hora é ${hora}, o minuto é  ${minuto} e o segundo é ${segundo}`
    console.log(stringTempoAtual)
    return stringTempoAtual
}


setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)

//o time do setTimeout iniciou praticamente ao mesmo tempo para as 3 chamadas

//Isso provavelmente acontece porque ele ocorre de maneira assincrona

setInterval(tempoAtual, 5000)
//a primeira execução aconteceu junto as demais contanto o tempo a partir de então