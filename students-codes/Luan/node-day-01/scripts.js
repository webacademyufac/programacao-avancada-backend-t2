/* 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 */


// CALLBACK

/*
const fs = require('fs')
console.log('Primeiro comando.')
fs.readFile('./text.txt', callback)
function callback(err, content) {
  if (err) return console.error('erro')
  console.log(String(content))
}
console.log('Segundo comando.')
console.log('Terceiro comando.')
*/


// utilizando programação síncrona

/* 
function sum() {
  const result = 1 + 1
  if (result === 2) {
    success()
  } else {
    erro()
  }
}
function success() {
  console.log('Sucesso! A soma é 2.')
}
function erro() {
  console.log('A soma não é 2. Alguma coisa deu errado...')
}

sum()
console.log('testando exibição...')
*/


// transformando em callback (programação assíncrona)

/* 
function sum(callback, callbackError) {
  const result = 1 + 1
  if (result === 2) {
    callback()
  } else {
    callbackError()
  }
}

sum(
  () => (console.log('Sucesso! A soma é 2.')),
  () => (console.log('A soma não é 2. Alguma coisa deu errado...'))
)
console.log('testando exibição...')
*/


// Promise - é uma classe; a tradução significa promessa
/* 
then() 
*/
// resolve e reject

/* 
const promise = new Promise((resolve, reject) => {
  const result = 1 + 2
  if (result === 2) {
    resolve('Sucesso! A soma é 2.')
  } else {
    reject('A soma não é 2. Alguma coisa deu errado...')
  }
})

promise.then(
  ((resultado) => (console.log(resultado))),
  ((erro) => (console.log(erro)))
)
*/


// voltando para calback

/* 
const nameCall = 'Paulo Sampaio'

function whoIsTheBest(callback, callbackError) {
  if (nameCall != 'Paulo Sampaio') {
    callbackError('Tá errado. Não tem como!')
  } else {
    callback({
      name: nameCall,
      message: `humildemente o melhor`
    })
  }
}
whoIsTheBest(
  ((success) => (console.log(`${success.name} é ${success.message}.`))),
  ((error) => (console.log(error)))
)

*/


// transformando em Promise

/* 
const name = 'Paulo Sampaio'

const p = new Promise((resolve, reject) => {
  if (name != 'Paulo Sampaio') {
    reject('Tá errado. Não tem como!')
  } else {
    resolve({
      name: name,
      message: `humildemente o melhor`
    })
  }
})

p.then(
  ((success) => (console.log(`${success.name} é ${success.message}.`))),
  ((error) => (console.log(error)))
)
*/


// Desafio 06

fetch('http://jsonplaceholder.typicode.com/users') /* Objeto do JavaScript (ES6) que funciona como uma Promise e trabalha requisições e respostas HTTP. */
    .then((resp) => resp.json()) /* Recebendo os dados e convertendo para um JSON. */
    .then(function (dado) { /* Recebendo os dados em um Array. */
        return dado.map(function (item) { /* Conseguimos varrer o array com o método map.*/
            const li = document.createElement('li') /* Criando um elemento li.*/
            li.innerHTML = `Nome: ${item.name} | Sobrenome: ${item.username}` /* Inserindo o elemento no HTML. */
            document.getElementById('nomes').appendChild(li)/* Inserindo um nó do tipo li na estrutura do DOM. */
        })
    })
    .catch((error) => {
        console.log('Algo não deu certo: ' + error)
    })
