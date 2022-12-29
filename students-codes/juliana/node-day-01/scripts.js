
// // const http = require('http');//import required são "equivalentes "

// // const hostname = '127.0.0.1';
// // const port = 3000;

// // // const server = http.createServer((req, res) => {
// // //   res.statusCode = 200;
// // //   res.setHeader('Content-Type', 'text/plain');
// // //   res.end('Hello World');
// // // });

// // // server.listen(port, hostname, () => {
// // //   console.log(`Server running at http://${hostname}:${port}/`);
// // // });

// // const fs = require('fs')
// // console.log('Primeiro comando.')

// // fs.readFile('./text.txt', callback)

// // function callback(err, content){
// //     if (err) return console.error('erro')
// //     console.log(String(content))//converter para string 
// // }
// // console.log('Segundo comando.')
// // console.log('Terceiro comando.')
// // //utilizando programaçãp assiclona

// // setTimeout (()=> (console.log('testando a função')), 3000)
// // // setTimeout(myFunction, 3000)//milissegundo
// // // function myFunction (){
// // //     console.log('testando a função')
// // // }
// console.log('comando que está após setTimeout')


// function tempoAtual (){
//     const date = new Date()
//     const hora = date.getHours()
//     const minuto = date.getMinutes()
//     const segundo = date.getSeconds();

//     const stringTempoAtual = `A hora é ${hora}, o minuto é  ${minuto} e o segundo é ${segundo}`
//     console.log(stringTempoAtual)
//     return stringTempoAtual
// }


// setTimeout(tempoAtual, 5000)
// setTimeout(tempoAtual, 5000)
// setTimeout(tempoAtual, 5000)

// //o time do setTimeout iniciou praticamente ao mesmo tempo para as 3 chamadas

// //Isso provavelmente acontece porque ele ocorre de maneira assincrona

// setInterval(tempoAtual, 5000)
// //a primeira execução aconteceu junto as demais contanto o tempo a partir de então

// //boa prática do callBack passado como função a nonima
// //utilizando programação síncrona

// function sum (success, erro){
//     const result = 1+1
//     if(result === 2){
//         success()
//     }else{
//         erro()
//     }
// }
// function success (){
//     console.log('Sucesso! A soma é 2')
// }
// function erro (){
//     console.log('A soma não é 2. Alguma coisa deu errado')
// }


// sum()
// console.log()
// function sum (callback, callbackErro){
//     const result = 1+1
//     if(result === 2){
//         callback()
//     }else{
//         callbackErro()
//     }
// }

// sum(
//     () => (console.log('Sucesso! A soma é 2')),
//     () => (console.log('A soma não é 2. Alguma coisa deu errado'))
// )//essa é a boa prática

// console.log('testando exibição')
//testar deixar as funções pesada

//Promise - é uma classe; a tradução significa promessa

//then() método de sucesso nas callback
//resolve e reject
// const promise = new Promise ((resolve,reject)=> {
//     const result = 1+3
//     if(result === 2){
//         resolve('Sucesso! A soma é 2') //deu certo passa resolver
//     }else{
//         reject('A soma não é 2. Alguma coisa deu errado') // deu errado passa reject
//     }
// })
// // promise.then((resultado)=>(console.log(resultado))) //usado para o resolve
// // promise.catch((resultado)=>(console.log(resultado))) //usado para reject
// promise.then(
//     ((resultado)=>(console.log(resultado))),
//     ((erro)=>(console.log(erro))) //usado para reject
// )

// //voltando para callback

const name = 'Paulo Sampaio'
// function whoIsTheBest(callBack, callbackErro){
//     if(name != 'Paulo Sampaio'){
//         callbackErro(`${name} ???? Tá errado. Não tem como`)
//     }else{
//         callBack({
//             name: name,
//             message: `humildemente o melhor`
//         })
//     }
    
// }
// // whoIsTheBest(
// //     ((sucess)=>(console.log(`${sucess.name} é ${sucess.message}.`))),
// //     ((error)=>(console.log(error)))
// // )

// //transformando em promesse
const promisePaulo = new Promise ((resolve,reject)=> {
    if(name != 'Paulo Sampaio'){
        reject(`${name} ???? Tá errado. Não tem como`) // deu errado passa reject
    }else{
        resolve({
            name: name,
            message: `humildemente o melhor`
        }) //deu certo passa resolver
    }
})
// promise.then((resultado)=>(console.log(resultado))) //usado para o resolve
// promise.catch((resultado)=>(console.log(resultado))) //usado para reject
promisePaulo.then(
    ((success)=>(console.log(`${success.name} é ${success.message}.`))),
    ((error)=>(console.log(error))) //usado para reject
)
