/* const testArrow = () => ((x=7), () => (x+5)) () 
console.log(testArrow())

const namesLength = names.map(function(value){    //vamos mudar esta linha abaixo
    return value.length 
})
console.log(namesLength) */

/* const testArrow = () => ((x=7), () => (x+5)) () 
console.log(testArrow())

const namesLength = names.map(value => value.length) // vamos mudar esta linha abaixo
console.log(namesLength)  */

//Aula sobre Arrow Function 

/* const names = ['Victor', 'Paulo', 'Elias', 'Fabiana'] 
names.forEach(function(names){
console.log(names)
})

const testArrow = () => ((x=7), () => (x+5)) () 
console.log(testArrow())

const namesLength = names.map( ({length}) => length )   //estou com um vetor chamando um método. 
console.log(namesLength) 
 */

// Closures - 08/11/2022
// quando usamos a variável dentro do escopo. 

/* let varX = 50 
function out(){
    let varX = 35
    function sumXand5(){
        let varX =10 
        return varX+5
    }
    return sumXand5
}
console.log(out()) */ 

// Orientação a Objetos - 08/11/2022
//Classe, Objetos, Atributo, Métodos 
//Para uma classe pode haver vários objetos 
// com orientação a objetos podemos economizar códigos 

/* class Product{                        // classe 
    constructor(name, price){         //métodos constructor. Criamos (atributos) 
        this.name = name              // usando o this esta referenciando algo da classe que esta fora do escopo. 
        this.price = price 
    }     
    productDetails(){
        console.log(`O nome do produto é ${this.name} e o preço é ${this.price}.`)
    }                
}

// instanciando um objeto Product. Da Classe Product. 
const shirt = new Product('Camisa Branca', 19.99)
shirt.productDetails() 
const sock = new Product('Meia cinza', 12.49)
sock.productDetails() 
 */

/* class Product{                        // classe 
    constructor(name, price){         //métodos constructor. Criamos (atributos) 
        this.name = name              // usando o this esta referenciando algo da classe que esta fora do escopo. 
        this.price = price 
    }     
    productDetails(){
        return `O nome do produto é ${this.name} e o preço é ${this.price}.`
    }   
    static test(){
        console.log('testando método estático....')
    }              
} */



//herança
/* class Tenis extends Product{
    constructor(name, price, size){   
        super(name, price)
        this.size = size 
    } 
    showNumber(){
        return `O tamanho do ${this.name} é ${this.size}`
    }
    productDetails(){
        return `O nome do produto é ${this.name} o tamanho é ${this.size} e o preço é ${this.price}.`
    }   
}

const tenis = new Tenis('Nike', 12000.00, 42)
console.log(tenis.showNumber()) 
//tenis.name = 'ALLSTAR' para trocar 
console.log(tenis.productDetails())

const shirt = new Product('Camisa Branca', 19.99)
shirt.productDetails() 

const sock = new Product('Meia cinza', 12.49)
sock.productDetails() 
Product.test()  */

//DOM - Docment Boject Model 

/* console.log(document.getElementById('titulo')) 
const texts = document.querySelectorAll('.text') 
console.log(texts)
texts.forEach((data)=> console.log(data))

texts[0].textContent = 'Estou alterando o primeiro paragrafo.'
texts[0].innerHTML = '<span>testando uma alteração....</span>'
texts[1].style.backgroundColor = 'red'
texts[2].remove()

const button = document.querySelector('#btn')
button.addEventListener */

/* console.log(document.getElementById('titulo')) 
const texts = document.querySelectorAll('.text') 
console.log(texts)
texts.forEach((data)=> console.log(data))

const button = document.querySelector('#btn')
button.addEventListener */

//callbacks 

//promises

//programação assincrona 