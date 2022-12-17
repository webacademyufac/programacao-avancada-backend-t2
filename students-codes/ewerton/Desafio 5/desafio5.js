function tempoAtual (){
    const date = new Date()
    const hora = date.getHours()
    const minuto = date.getMinutes()
    const segundo = date.getSeconds();

    const stringTempoAtualizadoizadoizado = `A hora é ${hora}, o minuto é  ${minuto} e o segundo é ${segundo}`
    console.log(stringTempoAtualizadoizadoizado)
    return stringTempoAtualizadoizado
}


setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)
setTimeout(tempoAtual, 5000)

//o time do setTimeout foi inicidado ao mesmo tempo para as três chamadas.

//pois a sua ocorrência é segundo uma forma Síncrona.

setInterval(tempoAtual, 5000)
//a primeira execução aconteceu junto as demais sendo contado o tempo a partir dos demais.