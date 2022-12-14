// Overview de JavaScript

// console
console.log('texto')
console.error('Mensagem de erro')
console.warn('Alerta')

// Variaveis

const nome = 'tharlis' // const uso para escopo global

let x = 10
console.log(nome)
if(true){
    let x = 20
    console.log(x)
}


// tipos de dados

// string
const nome2 = 'Maria'
console.log(nome2)
console.log(typeof nome2)

// number
let n = 10
console.log(n)
console.log(typeof n)

// bool
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined
let nada
console.log(nada)
console.log(typeof nada)

// arry
const liguagens = ['C', 'Java', 'JS', 22, true, '']
console.log(liguagens[5])
console.log(typeof liguagens[5])

// objects literals
const user = {
    username: 'vrc',
    password: '123',
    age: 31,
    name: 'Tharlis'}
console.log(user)
console.log(typeof user)


// metodos de string
const text = 'oi meu chapa'
console.log(text.length)
const textToArray = text.split(' ') // split quebra texto em um conjunto de caracteres
console.log(textToArray)
console.log(text.toLocaleLowerCase())
console.log(text.toLocaleUpperCase())
console.log(text.indexOf('oi')) // procurar algo dentro de uma string
console.log(text.charAt(text.length - 1))
console.log(text.slice(0, 7))

// mais sobre array
const chars = ['A', 'B', 'C', 7] // é possivel mudar os elementos do vetor, mas não é possivel mudar o tipo de 'chars': chars = 'novo conteudo'
console.log(chars.length)
console.log(chars[chars.length - 1])
chars[5] = 'F'
console.log(chars)
chars.pop()
console.log(chars)

// Object literals

const product = {
    productName: 'camisa',
    price: 99,
    inStock: true,
    size: ['p','m','g'],
    'main color': 'red'
}

console.log(product.price) // 29
console.log(product.size[2]) // g
console.log(product['price'])// 29
console.log(product["main color"]) // red

const {productName, price} = product

console.log(productName)
console.log(product.price)
product.price = 39
console.log(product.price)
console.log(price)


// destruturar
let vet = [1, 2, 3 ,5 ,6 ,7]
let [v1, v2, ...resto] = vet
let [c, , b] =vet // ignora o 2 de vet
console.log(v1)
console.log(b)//3

// JSON - JavaScrip Object Notation
// XML é concorrente de JSON

const dog = {
    name: 'Scoob',
    age: 10
}
console.log(dog)

const dogJson = JSON.stringify(dog) // transformar o object dog em JSON
console.log(dogJson)

const dogObject = JSON.parse(dogJson) // transforma JSON em object
console.log(dogObject)

const jsonErrado = '{"primeiro":"dado", "segundo":111, "teceiro":"dado"}'
const jsonErradoObject = JSON.parse(jsonErrado)
console.log(jsonErradoObject)

// DESAFIO 1
//Desafio 1: Armazene 5 dados numéricos em um vetor. 
// Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. 
// Utilize destructuring para copiar os valores para 5 variáveis. 
// Construa um objeto JSON com os valores das variáveis.

const vectorChallenge = [77, 45, 3, 8, 123]

const objectChalleng = {
    n1: vectorChallenge[0],
    n2: vectorChallenge[1],
    n3: vectorChallenge[2],
    n4: vectorChallenge[3],
    n5: vectorChallenge[4]
}

let {n1, n2, n3, n4, n5} = objectChalleng

console.log(JSON.stringify({n1, n2, n3, n4, n5}))

// Desafio 2
// Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. 
// Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora 
// (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas 
// variáveis e converta para um objeto JSON.
let valor1 = 25
let valor2 = 12
const result = {
    soma: valor1+valor2,
    subt: valor1-valor2,
    mult: valor1*valor2,
    divisao: valor1/valor2 
}

let {soma, subtracao, mult, divisao} = result
const resultJson = JSON.stringify({soma, subtracao, mult, divisao})


//desafio 07/11/22
const m = 5
const o = 10
const out = ('quinze é' + (m+o) + '\n e não' + (2*m+o) + '.')

const templateLi = `quinze é ${(m+o)}
e não ${(2*m+o)}`
console.log(templateLi)

const names = ['Paulo', 'Elias', 'Fulano', 'Fabiana']

names.forEach(function(name){
    
    console.log(name)
})

const modifiedNames = names.map(function(name){
    if (name == 'paulo')
        return('Paulo Sampaio')
    else
        return name
})

console.log(modifiedNames)

modifiedNames.forEach(function(name){
    console.log(name)
})

const numArray = [90, 12, 33, 5, 8, 9, 0 ,3 ,6, 4, 1].filter(function(number){
    if (number < 10)
        return number
})

numArray.forEach(function(number){
    console.log(number)
})

const sumArray = numArray.reduce(function(number1, number2){
    return number2+number1
})
console.log(sumArray)

// funcões
function myFuntion(name, sobrenome){ // precisa de um nome (se não for anonima) e parametro e um bloco a ser executado
    return `O nome é ${name} e o sobronome é ${sobrenome}`
}
const chamadaDaFuntion = myFuntion('texugo', 'mel')
console.log(myFuntion('fulando', 'tal'))
console.log(chamadaDaFuntion)

// arrow function === função anônima
// function (data) => {return 0;}

const myArrowFunction = (a, b) => (a+b)

console.log(myArrowFunction(5,5))

// Desafio 07/11/22
// () => ((x = 7) => (x + 5))
// function outS(){
//     let x = 7
//     function somXand5(){
//         return x+5
//     }
//     return sumXand5()
// }

// const tesArrow = () => ((x=7), ()=>(x+5)) () SOLUÇÃO DO DESAFIO
// console.log(tesArrow)

// const namesLength = names.map(function(value){
//     return value.length
// })

// const namesLength = names.map( value => value.length)

const namesLength = names.map( ({length}) => length)

console.log(namesLength)


// Closure
// let varX = 50
// function out(){
//     // let varX = 50
//     function sumXeN(){
//         return varX + 5
//     }
//     return sumXeN()
// }


// Orientação a objetos

class Procuct{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productDetails(){
        return `O nome do produto é ${this.name} de preço ${this.price}`
    }

    static teste(){
        console.log('TESTE METODO ESTATICO')
    }
}

// instanciando um ojeto product
const shirt = new Procuct('Camisa amarela', 39.99)
console.log(shirt.productDetails())
const sock = new Procuct('Meia cinza', 9.99)
console.log(sock.productDetails())
Procuct.teste()
console.log(typeof shirt)

// HERANÇA

class Tenis extends Procuct{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }
    showNubmer(){
        return `o tamanho do ${this.name} é ${this.size}`
    }
    productDetails(){
        return `O nome do produto é ${this.name} de preço ${this.price} e o tamanho ${this.size}`
    }
}

const tenis = new Tenis('Adidas', 259.99, 34)
console.log(tenis.showNubmer())
console.log(tenis.productDetails()) // metodo da classe pai (product)

console.log(shirt.productDetails())



// DOM

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('text'))

// apartir da atualização mais adequado
const texts =  document.querySelectorAll('.text')
console.log(texts)

texts.forEach((data) => console.log(data))

console.log(texts[0].textContent)
texts[0].textContent = 'Estou alterando o conteudo do primeiro paragrafo'
console.log(texts[0].textContent)

texts[0].innerHTML = `<span> modificando o conteudo
a lekleklek`

texts[1].style.backgroundColor = 'red'

const button = document.querySelector('#btn')
button.addEventListener('click',() => (texts[3].style.backgroundColor = 'red'))


// Callbacks

// promises

//programação assícrona
