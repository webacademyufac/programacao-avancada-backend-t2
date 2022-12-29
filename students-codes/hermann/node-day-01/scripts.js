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

// const fs = require('fs');

// console.log('Primeiro comando.');

// fs.readFile('./text.txt', callback);

// function callback(err, content) {
//     if (err) return console.error('erro');
//     console.log(String(content));
// }

// console.log('Segundo comando.');
// console.log('Terceiro comando.');;

// Utilizando programação assíncrona
// setTimeout(myFunction, 3000);

// function myFunction() {
//     console.log('Testando a função...');
// }

// setTimeout(() => (console.log('Testando o setTimeout')), 3000);

// console.log('Comando que está após setTimeout.');

// Desafio da Hora

// function functionDate() {
//     const dt = new Date();
//     const h = dt.getHours();
//     const m = dt.getMinutes();
//     const s = dt.getSeconds();
//     console.log(`Hora: ${h}:${m}:${s}`);
// }

// setTimeout(functionDate, 5000);
// setTimeout(functionDate, 5000);
// // setTimeout(functionDate, 5000);
// setInterval(functionDate, 5000);

// Utilizando programação síncrona
// function sum(callback, callbackErro) {
//     const result = 1 + 1;
//     if (result === 2) {
//         callback();
//     } else {
//         callbackErro();
//     }
// }

// function sucess() {
//     console.log('Sucesso! A soma é 2.');
// }

// function erro() {
//     console.log('A soma NÃO é 2. Alguma coisa deu errado...');
// }

// sum();

// sum(
//     () => (console.log('Sucesso! A soma é 2.')),
//     () => (console.log('A soma NÃO é 2. Alguma coisa deu errado...'))
// );
// console.log('Testando exibição...');

// Promise - é uma classe. promessa

// const promise = new Promise((resolve, reject) => {
//     const result = 1 + 2;
//     if (result === 2) {
//         resolve('Sucesso! A soma é 2.');
//     } else {
//         reject('A soma NÃO é 2. Alguma coisa deu errado...');
//     }
// });

// promise.then(
//     (resultado)=>(console.log(resultado)),
//     (error)=>(console.log(error))
// );
// promise.catch((resultado)=>(console.log(resultado)));

// voltando para callback

// const name = 'Paulo Sampaio';
// function whoIsTheBest(callback, callbackError) {
//     if (name != 'Paulo Sampaio') {
//         callbackError('Tá errado. Não tem como!');
//     } else {
//         callback({
//             name: name,
//             message: `Humildemente o melhor.`
//         });
//     }
// }

// whoIsTheBest(
//     ((sucess) => (console.log(`${sucess.name} é ${sucess.message}`))),
//     ((error) => (console.log(error)))
// )


// 
const name = 'Paulo Sampaio';

const promise = new Promise((resolve, reject) => {
    if (name != 'Paulo Sampaio') {
        reject('Tá errado. Não tem como!');
    } else {
        resolve({
            name: name,
            message: `Humildemente o melhor.`
        });
    }
});

promise.then(
    ((sucess) => (console.log(`${sucess.name} é ${sucess.message}`))),
    ((error) => (console.log(error)))
);