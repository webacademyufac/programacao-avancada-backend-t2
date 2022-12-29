// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//Callback
const fs = require('fs')
const { resolve } = require('path')

fs.readFile('./text.txt', callback)

function callback(err, cont){
    if(err) return console.error('error')
    console.log(String(cont))
}


// utilizando programação assíncrona
console.log('Primeiro comando')
console.log('Segundo comando')
console.log('Terceiro comando')

// setTimeout(myFuntion, 3000)

// function myFuntion(){
//     console.log('testando função...')
// }

// setTimeout(() => console.log('testando o setTimeout'), 3000)

console.log('comando que esta depois do setTimeout')

// function desafio(){
//     const date = new Date()
//     console.log(`a hora é: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }
// setTimeout(desafio, 5000)
// setInterval(desafio, 5000)
// setTimeout(desafio, 5000)
// setInterval(desafio, 5000)


//Utilizando programação síncrona

// sum(
//     ()=>(console.log('Sucesso! a soma é dois')),
//     ()=>(console.log('Erro! a soma não é dois, teve algum error'))
// )
// console.log('testandoooo')

//Promise - é uma clase: a tradução significa promesa
//then()
//resolve e rejact

const promise = new Promise((resolve, reject)=> {
    const result = 1+1
    if(result === 2){
        resolve('sucesso')
    }else{
        reject('error')
    }
})
promise.then((resultado)=>(console.log(resultado)))

// voltando para callback

const name = 'Paulo Sampaio'

// function whosIsTheBest(callback, callbackError){
//     if(name != 'Paulo Sampaio'){
//         callbackError('Ta errado. Não tem como!')
//     }else{
//         callback({
//             name: name,
//             message: `humildemente o melhor`
//         })
//     }
// }
const promiseAtv = new Promise((resolve, reject)=>{
    if(name != 'Paulo Sampaio'){
            reject('Ta errado. Não tem como!')
        }else{
            resolve({
                name: name,
                message: `humildemente o melhor`
            })
        }
})

// whosIsTheBest(
//     ((success)=>(console.log(`${success.name} ${success.message}`))),
//     ((error)=>(console.log(error)))
// )
promiseAtv.then(
    ((success)=>(console.log(`${success.name} ${success.message}`))),
    ((error)=>(console.log(error)))
)