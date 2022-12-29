// //Overview do Javascript

// //Tudo em javascript é um objeto
// //Console
// console.log("Estou aqui!")
// console.error("Mensagem de Erro") //Erro
// console.warn("Mensagem de Alerta") //Alerta
// //Função tem parametros, e depois de criadas passamos argumentos
// //Instancia da classe = Objeto

// //Variaveis
// var primeira // Pouco utilizada 

// let segunda // Usar let dentro de escopos definidos

// const terceira  = 3 //persistir dados que não precisam de alterações, usa-se inicializar e distribuir em outros escopos

// //Todo documento do js é um bloco em um escopo global que serve para codigo inteiro, se declarar um várial dentro de um escopo
// //dentro do bloco global ele vai existir apenas naquele escopo
// //Uma constante pode ser chamada em qualquer lugar do codigo desde que seja declarada no escopo global
// const nome = "Marcos"
// console.log(nome)

// let x = 10

// if (true){
//     let x = 20
// }
// console.log(x)

// // tipos de dado
// //String - Toda string é uma array
// const nome2 = "Marcos"
// console.log(nome2)
// console.log(typeof(nome2))//typeof = Mostra o tipo da variavel

// //Number
// let num = 10
// console.log(num)
// console.log(typeof(num))
// num = 15.99
// console.log(num)
// console.log(typeof(num))

// //Boolean, uma boa pratica é começar o nome da variavel com is. Posso escrever com 0 ou 1 também apesar de aparecer com o tipo number
// const isLife = true
// console.log(isLife)
// console.log(typeof(isLife))

// //null
// const a = null
// console.log(a)
// console.log(typeof(a))

// // Underfined
// let nada
// console.log(nada)
// console.log(typeof(nada))

// // Array
// const linguagens = ["Java", "Python", "C++", "JavaScript"]
// console.log(linguagens)
// console.log(linguagens[0]) // Selecionar um item especifico da array
// console.log(typeof(linguagens))
// console.log(typeof(linguagens[0]))

// // object literais
// const user = {
//     userName: "MGSR",
//     password: "12345678",
//     age: 22,
//     name:"Marcos" 
// }

// console.log(user)
// console.log(typeof(user))
// console.log(user.age)

// // metodos de string
// const text = "qualquer asd"
// console.log(text.length)
// console.log(text.toUpperCase())

// const textToArray = text.split(' ')// quebra palavra ou texto toda vez que usamos um parametro escolhido.
// console.log(textToArray[0])
// console.log(text.toLocaleUpperCase())//Colocar em letra maiuscula
// console.log(text.indexOf('a')) // Se ele retornar -1 não encontrou o que se foi pedido
// console.log(text.charAt(0))
// console.log(text.slice(9, 11))

// // mais sobre arrays
// const chars = ["acs", "b", "c", "d", "e"]
// let tamanho = chars.length
// console.log(chars.length)
// console.log(chars[tamanho - 1])
// console.log(chars[chars.length - 1])
// chars[5] = "f"
// console.log(chars)
// chars.pop()
// chars.pop()
// chars.unshift("d")
// console.log(chars)

// // push para inserir no fim de um array
// // pop para excluir do fim do array
// // shift // removendo no começo
// // unshift // inserindo no final

// // object literals
// const produtc = {
//     name: 'Camisa',
//     price: 29.59,
//     inStock: true,
//     size: ["P", "M", "G"],
//     "main color": "red"
// }

// console.log(produtc.price)
// console.log(produtc["price"])
// console.log(produtc["main color"]) //Uso desta maneira quando for uma cadeia de caracteres

// //destructuring

// let { name, price } = produtc
// price = 30.49
// console.log(price)
// console.log(produtc.price)


// const vector = [3,7,2,45,99]
// let [ v1, v2, ...outroVector ] = vector
// console.log(outroVector)

// JSON - Javascript Object Notation
// XML é concorrente do JSON

// Criando o objeto cachorro

// const dog = {
//     name:"Scooby",
//     age: 10
// }

// console.log(dog)
// const dogJson = JSON.stringify(dog)
// console.log(dogJson)
// const dogObject = JSON.parse(dogJson)
// console.log(dogObject)

// // const jsonError = '{"city":"Rio Branco","population":1252155,"IDH":"5546}' // Linha de código errada para exemplificação

// // const jsonErrorObject = JSON.parse(jsonError)
// // console.log(jsonErrorObject)

// const a = 5
// const b = 10
// const out = ('Quinze é ' + (a+b) + '\ne não ' + (2*a+b) + '.')
// const outLiteral = `Quinze é ${(a + b)}
// e não ${((2*a)+b)}.`

// console.log(out)
// console.log(outLiteral)

// const names = ["Victor", "Paulo", "Elias", "Fabiana"]
// names.forEach(function(name){
//     names[0] = "Lucas"
//     console.log(name)
// })// Melhor maneira de trabalhar com o forEach seria criando uma função anônima.

// const modifiedNames = names.map(function(name) {
//     if(name == "Paulo")
//         return ("Paulo Sampaio")
        
//     else
//         return name
// })// Permite fazer alterações com os dados da Array

// console.log(modifiedNames.join(", "))

// modifiedNames.forEach(function(name){
//     console.log(`${name}`)
// })

// const numArray = [90,80,-9,9,6,5,2,4,0,8].filter(function(num){
//     return (num < 10)
// })// Busca dentro de um conjunto de dados um filtro e devolve dentro de um Array
// console.log(numArray)

// const sumArray = numArray.reduce(function(num1, num2){
//     return (num1 + num2)
// })// Pega o primeiro valor e depois o sucessor e soma, fazendo isso percorrendo o Array
// console.log(sumArray)

// // Função estatica não precisa de um array para chamar ela
// // Funções

// // function capturaName(){
// //     const nameAndSurnameUsuario = document.querySelector("form")
// //     const nameUsuario = nameAndSurnameUsuario.querySelector("name")
// //     const surnameUsuario = nameAndSurnameUsuario.querySelector("surname")

// //     console.log(myFunction(nameUsuario, surnameUsuario))
// // }

// function myFunction(name, surname){
//     return `O nome completo é ${name} ${surname}.`
// }



// console.log(myFunction("Marcos", "Guilherme"))

// // arrow function === função anônima
// // function(data) {return 0;}

// const myArrowFunction = (a,b) => a + b
// console.log(myArrowFunction(5,2))

// const namesLength = names.map((value) => (value.length)) // Pode-se escrever de outra maneira value = value.length, ({ length }) => length.
// // const namesLength = names.map function(value) {
// //     return value.length
// // }
// console.log(namesLength)

// let varX = 50
// function outt(){
//     function sumXand5(){
//         return varX+5
//     }
//      return sumXand5
// }

// outt()

// orientação a objetos

class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}.`
    }//Faz a chamada do produto de uma maneira geral para que sirva para qualquer item criado
    static test(){
        console.log("testando método estático...")
    }// Não precisa criar nem um objeto para que se seja chamado 
}
// instanciando um objeto Product
const shirt = new Product('Camisa Preta', 19.99)
console.log(shirt.productDetails())
const sock = new Product('Meia Branca', 12.49)
console.log(sock.productDetails())
Product.test()

// console.log(shirt.name)
// console.log(shirt.price)
// console.log(shirt)

// const jsonProductShirt = JSON.stringify(shirt)
// console.log(jsonProductShirt)

// herança
class Tenis extends Product{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}.`
    }
}

const nikeTenis = new Tenis("Tenis Nike Jordan", 12500.09, "42")
console.log(nikeTenis.productDetails())
console.log(nikeTenis.price)
console.log(nikeTenis.showNumber())

// DOM - Document Object Model
const title = document.querySelector("#title")
const paragrafos = document.querySelectorAll(".text")
console.log(title)
console.log(paragrafos)
paragrafos.forEach(data => console.log(data))

paragrafos[0].innerHTML = "Agora vai ser isso aqui!"
paragrafos[1].textContent = "Estou mudando aqui agora hahahahah!!!!!"

paragrafos[2].remove()

const button = document.querySelector("#btn")

const backgroundHtml = document.querySelector("#fundo")

button.addEventListener("click", () => backgroundHtml.getElementsByClassName.backgroundColor ="red")
// callbacks


// promises

// async await - Ver no final de semana

// programação assincorna
