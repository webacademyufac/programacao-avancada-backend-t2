// //Overview de JavaScript

// //console
// console.log('texto')//tanto faz aspas duplas e simples deve seguir o padrão a crase é em literais
// console.error('Essa é uma mensagem de erro ...') 
// console.warn('Isso é um alerta')

// // variáveis

// let x = 10
// if(true){
//     let x = 20
//     console.log(x)
// }

// //tipos de dados
// // string

// const name = 'Juliana'
// console.log(name)
// console.log(typeof name)

// //number

// let n = 10
// console.log(n)
// console.log(typeof n)

// n = 15.99

// console.log(n)
// console.log(typeof n)

// //inteiro e flutuante são visto como a mesma coisa no javascript

// //bool
// //para variável do tipo booleano existe uma boa prática de nomeclatura começa com is, 
// //outro padrão primeira lepra minuscula e segunda maiuscula
// const isOpen = true // o numero 1 é true e 0 é false pode ser usado no if
// console.log(isOpen)
// console.log(typeof isOpen)

// //null
// const a = null
// console.log(a)
// console.log(typeof a)

// //qualquer variável do javascript pode ser considerado um objeto não tem método mas tem propriedades

// //underfined
// //se não coloca nada virá isso underfined se deixar sem atribuir valor , erro trevoso
// let nada
// console.log(nada)
// console.log(typeof nada)

// //array
// const linguagens = ['C++',50,'Python','JS'] //começa no zero, toda string em JavaScript e um Array
// // é um vetor não precisa escolher o tipo, logo posso ter vetor de varios tipos diferentes
// console.log(linguagens[1])
// console.log(typeof linguagens[1])

// //object literals
// const user = { 
//     username:'vrc',
//     password: '123',
//     age:31,
//     name:'Victor'
// }
// console.log(user)
// console.log(typeof user)

// // métodos de String

// const text = 'qualquer um'
// console.log(text)
// console.log(text.length)
// //quebrar texto em um conjunto de caracteres
// const textToArray = text.split(' ')
// console.log(textToArray[0]) //se aparecer undefined é porque ta acessado um indice não inserido
// console.log(text.toLocaleUpperCase())//se não colocar () aós a função ele só informa que isso é uma função
// //procurar algo dentro de uma string se não achar retorna -1
// //procurar algo na string
// console.log(text.indexOf('abc'))
// console.log(text.charAt(text.length - 1))
// console.log(text.charAt(0))
// console.log(text.slice(2,4))

// //mais sobre arrays
// const chars = ['AAA', 'B', 'C', 'D', 88]
// console.log(chars.length)
// console.log(chars[chars.length - 1])
// //push F inserir o F fim
// //pop Retira o Ultimo
// //push F inserir o F fim
// //pop Retira o Ultimo
// //unshift F inserir o F fim
// //shift Retira o Ultimo
// chars[5] = 'F'
// console.log(chars)
// chars.pop()
// chars.pop()
// chars.pop()
// chars.pop()
// chars.pop()
// chars.unshift('B')
// console.log(chars)


// //
// //Desafio da calculadora
// //op 1
// function sum(){
//     const formData = new FormData(document.querySelector('form'))
//     const n1 = formData.get('n1')
//     const n2 = formData.get('n2')
//     console.log(n1+' '+n2)
// }


// // object literals

// const product = {
//     productName: 'Camisa',
//     price: 29.99,
//     inStock: true,
//     size: ['p', 'm', 'g'],
//     'main color': 'red'
// }
// console.log(product.size[product.size.length-1])
// console.log(product['price'])
// //quando for uma label usar a versão a baixo não o .
// console.log(product['main color'])

// //destructuring - desestruturação
// let {productName, price } = product //virá constante então não pode mudar o tipo mas pode
// console.log(price)
// price = 30.48
// console.log(price)

// const vector = [3,7,2,99]
// let [ v1, v2, ...outrovetor] = vector
// console.log(outrovetor)

// //JSON - JavaScript Object Notation
// //XML é concorrente do JSON

// //criando o objeto cachorro

// const dog = {
//     name: 'Scooby',
//     age: 10
// }

// console.log(dog)
// const dogJson = JSON.stringify(dog)
// console.log(dogJson)
// const dogObject = JSON.parse(dogJson)
// console.log(dogObject)

// // const jsonErrado = '{"primeiro":"dado1","segundo":222,"terceiro":"dado3}'
// // const jsonErradoObject = JSON.parse(jsonErrado)
// // console.log

// //desafio 2 


// // //desafio 3



// //resposta prof
// const vectorChallenge = [77,45,3,8,123]
// const objectChallenge = {
//     n1: vectorChallenge[1],
//     n2: vectorChallenge[2],
//     n3: vectorChallenge[3],
//     n4: vectorChallenge[4],
//     n5: vectorChallenge[5]
// }
// const {n1, n2, n3, n4, n5} = objectChallenge

// console.log(JSON.stringify({n1,n2,n3,n4,n5}))
// const num1 = 10
// const num2 = 20
// const calc = {
//     soma: num1+num2,
//     sub: num1-num2,
//     mult: num1/num2,
//     div: num1*num2,
// }
//  console.log(JSON.stringify(calc))



//  //operador ternario
//  const resultado = n > 20 ? true : false
// //while
// let contador=0
// const lista = [1, 7, 3, 64, 2, 0] 
// while(contador < lista.length){
//     console.log('O \'elemento\' da\n vez é'+ lista[contador] + '.')
//     contador++ 
// }

// const outraLista = ['a', 'b', 'c', 'd', 'e']
// for(let contador = 0; contador < outraLista.length; contador++)
//     console.log(`O elemento da
//      vez é ${outraLista[contador]}.`)


//      const b = 5
//      const c = 10
//      const out = ('Quinze é ' + (b+c) + '\n não ' + (2*b+c) + '.')
//      const outlit = (`Quinze é ${(b+c)}
//      não ${(2*b+c)}.`)
//       console.log(out)
//       console.log(outlit)

//método de arrays 
const names = ['Victor', 'Paulo', 'Elias', 'Fabiana']
// names.forEach(function(name){//percorre todos os campos 1 por 1
//     console.log(name)
// })

// const modifiedNames = names.map(function(name){
//     if(name == 'Paulo')
//         return ('Paulo Sampaio')
//     else
//         return name
// })

// modifiedNames.forEach(function(name){
//     console.log(name)
// })

// const numArray = [90,4,6,22,0,-36,1,4].filter(function (num) {
//         return num < 10
    
// })
// numArray.forEach(function(num){
//     console.log(num)
// })

// console.log(numArray)

// const sumArray = numArray.reduce(function(num1, num2){
//     return num1+num2
// })

// console.log(sumArray)


//funções

function myFuction(){
    return 'O nome completo é ${name} ${surname}'
}
console.log(myFuction('Paulo', 'Sampaio'))



// //arrow function == função anônima
// // fuction(data){return 0;}
// const myArrowFuction = (a,b)=> a+b
// console.log(myArrowFuction(5,2))

//desafio 4




// const varFor = ()=> ((X=7) => (X+5))
// console.log(varFor())
//solução proffff
// const testArrow = () => ((x=7), ()=>(x+5)) ()

// const namesLength = names.map(function(value){
//     return value.length
// })
// const namesLength = names.map(value => value.length)//ARROW SE FOR UMA   COISA SÓ NÃO PRECISA DE ()

const namesLength = names.map(({length}) => length)//MANIPULA O DADO DE DENTRO DE UM VETOR RETORNO PARA A POSIÇÃO ATUAL O TAMANHO
//{length} {} objeto

console.log(namesLength)




// orientação a objeto

class Product{
    constructor(name, price){
       this.name = name
       this.price = price        
    }

    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}`
    }

    static test(){
        console.log('testando método estatico...')
    }
}

//herança

class Tenis extends Product{
    constructor(name, price, size){
        super(name, price) //usando a classe anterior instancia isso
        this.size = size
    }
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}`
    }
    productDetails(){
        return `O nome do produto é ${this.name} e o tamanho é ${this.size} preço é ${this.price}`
    }
}


//instanciando objeto Product
const shirt = new Product('Camisa branca', '19.99') //new aloca memoria do tamanho do cara, () chamada do construtor
console.log(shirt.productDetails())

const sock = new Product('Meia cinza', 12.49)
console.log(sock.productDetails())
Product.test()

const tenis = new Tenis('tenis Nike Jordan', 12000.00, '42')
console.log(tenis.showNumber())
console.log(tenis.productDetails())

// DOM - 

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('text'))
const texts = document.querySelectorAll('.text')
console.log(texts)
texts.forEach((data)=> console.log(data))

texts[0].textContent = 'Estou alterando o primeiro parágrafo'


texts[0].innerHTML = '<span> Testando uma alteração</span>'//escrevendo no html

texts[1].style.backgroundColor = 'red'
texts[2].remove()

const button = document.querySelector('#btn')
button.addEventListener('click',()=>(texts[3].style.backgroundColor = 'orange'))