// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/plain');
//    res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
// });7

// const fs = require('fs');



// console.log('p')
// fs.readFile(',/text.txt', callback)
// console.log('aegund')
// console.log('terc')



// function callback(err, content) {
//    if (err) return console.error('erro')
//    console.log(String(content))
// }


// function getTimeString() {
//    let date = new Date()
//    console.log(`Hora certa: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}}`)
// }
// console.log("Executando")
// setTimeout(getTimeString, 5000)
// setTimeout(getTimeString, 5000)
// setTimeout(getTimeString, 5000)
// setInterval(getTimeString, 5000)

// console.log("antes")
// function sum(sucess, erro) {
//    const result = 1 + 1
//    if (result = 3) {
//       sucess()
//    } else {
//       erro()
//    }
// }

// function sucess() {
//    console.log("Sucesso! Deus certo.")
// }
// function erro() {
//    console.log("Erro! Algo deu muito errado.")
// }
// sum(sucess, erro)


const name = 'Paulo Sampaio'
const promessa = new Promise((resolve, reject) => {
   if (name == 'Paulo Sampaio')
      resolve({ name: name, message: 'é o melhor' })
   else
      reject({ name: name, message: 'não é o melhor' })
})

// promessa
//    .then((object) => console.log(`${object.name} ${object.message}`))
//    .catch((object) => console.log(`${object.name} ${object.message}`))

async function teste(){
   let result = await promessa
   console.log(`${result.name} ${result.message}`)
}
teste()