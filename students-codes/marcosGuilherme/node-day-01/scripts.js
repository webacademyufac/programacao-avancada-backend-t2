// const http = require('http');//Importação do mesmo jeito do import

// const hostname = '127.0.0.1';//localHost, IP
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// }); //crateServer é um método de http

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// callback

// const fs = require("fs") // Quando fazer a importação de um modulo, utilizar a o nome da variavel sendo o mesmo o do modulo

// console.log("Peimeiro comando.")
// fs.readFile("./text.txt", callback)

// function callback(err, content) {
//     if(err) return console.error("erro")
//     console.log(String(content))
// }

// console.log("Segundo comando.")
// console.log("Terceiro comando.")


// // Utilizando programação assíncrona
// setTimeout(() => console.log("\n\nTestando a função parte 2..."), 1000)
// setTimeout(myFunction, 3000)

// function myFunction() {
//     console.log('\n\nTestando a função...')
// }
// console.log("Comando após setTimeout")


// utilizando programação síncrona

// console.log("Eu estou aqui também...")
// function sum(callbackSucess, callbackErro){
//     const result = 1+1
//     let cont = 0
//     while(cont < 10){
//         if(result == 2){
//             callbackSucess()
//         }
//         else{
//             callbackErro()
//         }
//         cont = cont + 1
//     }
    
// }

// // function sucess(){
// //     console.log("Sucesso! A soma é 2.")
// // }

// // function erro(){
// //     console.log("A soma não é 2. Algo deu errado.")
// // }


// sum(() => (console.log("Sucesso! A soma é 2.")), () => (console.log("A soma não é 2. Algo deu errado.")))
// console.log("Eu estou aqui...")

// Promise É uma classe;
// then() método utilizado quando se tem sucesso
//resolve and reject Quando o código dá erro

// const promise = new Promise((resolve,reject) => {
//     const result = 1+888

//     if(result == 2){
//         resolve("Sucesso! A soma é 2.")
//     }
//     else{
//         reject("A soma não é 2. Algo deu errado.")
//     }
// })

// promise.then(
//     (resultado) => (console.log(resultado)),
//     (erro) => (console.log(erro)))
//     )


// Voltando para callback
// const name = "Paulo Sampaio"

// function whoIsTheBest(callback, callbackErro){
//     if(name != "Paulo Sampaio"){
//         callbackErro({
//             name: name
//             message: `não é tão bom.`
//         })
//     }else{
//         callback({
//             name: name,
//             message: `humildimente o melhor`
//         })
//     }
    
// }

// whoIsTheBest(
//     (success) => (console.log(`${success.name} é ${success.message}`)), 
//     (erro) => (console.log(erro))
// )
const name = "Paulo Sampaio"
const promise = new Promise((resolve, reject) => {
    if(name != "Paulo Sampaio"){
        reject({
            name: name,
            message: `não é tão bom.`
        })
    }else{
        resolve({
            name: name,
            message: `humildimente o melhor`
        })
    }
})

promise.then(
    (success) => (console.log(`${success.name} é ${success.message}`)),
    (erro) => (console.log(`${erro.name} é ${erro.message}`))
)