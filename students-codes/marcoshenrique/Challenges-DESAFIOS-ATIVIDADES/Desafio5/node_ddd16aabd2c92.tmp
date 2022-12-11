/* CHALLENGE 05: 
Desafio: utilize a classe nativa Date para, dentro de uma função, exibir via console 
uma string com a hora, minutos e segundos atual. Em outras palavras: crie uma função 
sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, 
getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, 
acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node 
./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso 
acontecer?

Agora, utilize o método setInterval apenas uma vez no lugar de setTimeout e responda às 
mesmas perguntas. */ 


function comcallback(){
    const data = new Date()
    const h = data.getHours()
    const m = data.getMinutes()
    const s = data.getSeconds()
    console.log(`A hora é ${h}, os minutos são ${m}, e os segundos ${s}`)
}

console.log(comcallback(), 5000)
setTimeout(comcallback, 5000)
setInterval(comcallback, 5000)