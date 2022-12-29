// // Overview de JavaScript


// // console
// console.log('texto')
// console.error('Essa é uma mensagem de erro!')
// console.warn('Isso é um alerta')

// // variaveis
// let x = 10;

// if(true){
//     let x = 20;
//     console.log(x);
// }

// console.log(x);

// // tipos de dados

// // string
// const name = 'elias';
// console.log(name);
// console.log(typeof name);

// // number
// let n = 10;
// console.log(n);
// console.log(typeof n);
// n = 15.99
// console.log(n);
// console.log(typeof n);

// // Boolean
// const isOpen = true;
// console.log(isOpen);
// console.log(typeof isOpen);

// // null
// const a = null;
// console.log(a);
// console.log(typeof a);

// // undefined
// let nada
// console.log(nada);
// console.log(typeof nada)

// //array
// const linguagens = ['C++',50,'Python','JS'];
// console.log(linguagens[1])
// console.log(typeof linguagens[1]);

// // object literals
// const user = {
//     username:'nock', 
//     password:'123',
//     age:31,
//     name: 'elias'
// }
// console.log(user);
// console.log(typeof user);

// // métodos de string
// const text = 'qualquer um';
// console.log(text.length);
// // Quebrar texto em um conjunto de caracteres
// const textToArray = text.split('quer');
// console.log(textToArray[1]);
// console.log(text.toLocaleUpperCase());
// // procurar algo dentro de uma string
// console.log(text.indexOf('abc'));
// console.log(text.charAt(0));
// console.log(text.slice(2,4))

// //mais sobre arrays
// const chars = ['A', 'B', 'C', 'D'];
// console.log(chars.length);
// console.log(chars[chars.length - 1]);
// chars[4] = 'E';
// console.log(chars);
// chars.pop();
// chars.pop();
// console.log(chars);

// //object literals

// const product = {
//     pName: 'Camisa',
//     price: 29.99,
//     inStock: true,
//     size: ['p','m', 'g'],
//     'Main color':'red'
// }

// console.log(product.price)
// console.log(product[['price'])

// // distructuring - desestruturação
// let { pName, price } = product
// console.log(price)
// price = 30.49
// console.log(price)

// const vector = [3,7,2,99]
// let [ v1, v2, ...otherVector ] = vector
// console.log(otherVector)

// // JSON- JavaScript Object Notation
// // XML é concorrente do JSON

// // criando o objeto cachorro
// const dog = {
//     dName: 'Scooby',
//     age: 10
// }
// console.log(dog)
// const dogJson = JSON.stringify(dog)
// console.log(dogJson)
// const dogObject = JSON.parse(dogJson)
// console.log(dogObject)

// // Errando propositalmente para saber o que acontece
// // const jsonErrado = '{"primeiro":"dado1","segundo": 2, "terceiro":"dado3}'
// // const jsonErradoObj = JSON.parse(jsonErrado)
// // console.log(jsonErradoObj)

// const A = 5
// const B = 10
// // const out = ('Quinze é ' + (a+b) + '\ne não ' + (2*a+b) + '.')
// const out = (`Quinze é ${A+B}
// e não ${2*A+B}.`)
// console.log(out)

// // Métodos de arrays

// const names = ['Victor','Paulo','Elias', 'Fabiana']
// names.forEach(function(name){
//     console.log(name)
// })

// const modifiedNames = names.map(function(name){
//     if(name == 'Paulo')
//     return ('Paulo Sampaio')
//     else
//     return name
// })

// modifiedNames.forEach(function(name){
//     console.log(name)
// })

// const numArray = [90, 80, 70, 60, 50, 40, 30, 20, 010].filter(function(num){
//     return num < 40
// })
// numArray.forEach(function(num){
//     console.log(num)
// })
// console.log(numArray)

// const sumArray = numArray.reduce(function(num1, num2){
//     return num1+num2
// })
// console.log(sumArray)

// // funções

// function myFunction(name, surname){
//     return `O nome é ${name} ${surname}`
// }

// console.log(myFunction('Paulo','Sampaio'))

// //arrow function === função anônima
// // function(data){return 0;}

// const myArrowFunction = (a, b) => a+b
// console.log(myArrowFunction(5, 2))

// const namesLength = names.map( value => value.length)
// console.log(namesLength)

// // orientação a objetos

// class Product{
//     constructor(name, price){
//         this.name = name 
//         this.price = price
//     }
//     productDetails(){
//         return `O nome do produto é ${this.name} e o preço é ${this.price}`
//     }
//     static test(){
//         console.log('testando método estatico...')
//     }
// }

// // herança

// class Tenis extends Product{
//     constructor(name, price, size){
//         super(name, price)
//         this.size = size
//     }
//     showNumber(){
//         return  `O tamanho do ${this.name} é ${this.size}.`
//     }
//     productDetails(){
//         return `O nome do produto é ${this.name} e no tamanho ${this.size} o preço é ${this.price}.`
//     }
// }

// // intanciando um objeto Product

// const shirt = new Product('Camisa branca', 19.99)
// console.log(shirt.productDetails())

// const sock = new Product('meia vermelha', 5.99)
// console.log(sock.productDetails())

// Product.test()

// const tenis = new Tenis('tenis nike jordan', 12000.00, '42')
// console.log(tenis.showNumber())
// console.log(tenis.productDetails())

// //DOM - document Object Model

// console.log(document.getElementById('titulo'))
// // se usarmos o queryselector, dentro nós temos que colocar como se fosse o seletor de CSS exemplo:#, ., ...
// const texts = document.querySelectorAll('.text')
// console.log(texts)

// texts.forEach((data) => console.log(data))
// // altera texto
// texts[0].textContent = 'Estou alterando o primeiro paragrafo.'

// texts[0].innerHTML = '<span>Testando alteração</span>'

// texts[1].style.backgroundColor = 'red'

// texts[2].remove()

// const button = document.querySelector('#btn')
// button.addEventListener('click', ()=>(texts[3].style.backgroundColor = 'orange'))

// Callbacks

// const fs = require('fs')

// console.log('Primeiro comando')
// console.log('Segundo comando')
// console.log('Terceiro comando')

// fs.readFile('./text.txt', callback)

// function callback(err, content){
//     if(err) return console.error('erro')
//     console.log(String(content))
// }

// utilizando programação síncrona

// function sum(){
//     const result = 1+1
//     if(result === 2){
//         sucess()
//     }
//     else
//     erro()
// }

// function sucess(){
//     console.log('Sucesso! A soma é 2')
// }

// function erro(){
//     console.log('A soma não é 2. Alguma coisa deu errado')
// }

// sum()
// console.log('testando exibição...')

// // Transformando em callback (programação assincrona)

// function sum(callback, callbackError){
//     const result = 1+1
//     if(result === 2){
//         callback()
//     }
//     else{
//     callbackError()
//     }
// }

// sum(
//     () => (console.log('Sucesso! A soma é 2')),
//     () => (console.log('A soma não é 2. Alguma coisa deu errado'))
// )

// console.log('testando exibição...')

// //promisse - é uma classe; a tradução significa promessa
// //then()
// //resolve e reject

// const promise = new Promise((resolve, reject)=> {
//     const result = 1+1
//     if(result === 2){
//         resolve('Sucesso! A soma é 2')
//     }
//     else{
//     reject('A soma não é 2. Alguma coisa deu errado')
//     }
// })

// promise.then(
//     (resultado)=>(console.log(resultado)),
//     (erro)=>(console.log(erro))
// )

// voltando para callback

const name = 'Paulo Sampaio'

// function whoIsTheBest(callback,callbackError){
//     if(name != 'Paulo Sampaio'){
//         callbackError("Ta errado. Não tem como!")
//     }
//     else
//     callback({
//         name: name,
//         message: `humildemente o melhor`
//     })
// }

// whoIsTheBest(
//     ((sucess)=>(console.log(`${sucess.name} é ${sucess.message}.`))), 
//     ((erro)=>(console.log(erro)))
// )

// transformando em promisse

const promise = new Promise((resolve, reject) =>{
    if(name != 'Paulo Sampai'){
        reject("Ta errado. Não tem como!")
    }
    else
    resolve({
        name: name,
        message: `humildemente o melhor`
    })
})

promise.then(
    ((sucess)=>(console.log(`${sucess.name} é ${sucess.message}.`))), 
    ((erro)=>(console.log(erro)))
)

// async await
