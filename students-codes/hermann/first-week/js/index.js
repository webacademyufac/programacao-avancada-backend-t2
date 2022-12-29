// // Overview do Javascript

// // Console
// console.log('texto');
// console.error('Essa é uma mensagem de erro.');
// console.warn('Isso é um alerta!');

// // Variaveis
// let x = 10;

// if(true) {
//     let x = 20;
//     console.log(x);
// }

// // Tipos de dados

// // String
// const nome = "Hermann";
// console.log(nome);
// console.log(typeof nome);

// // Number
// let n = 10;
// console.log(n);
// console.log(typeof n);
// n = 15.99;
// console.log(n);
// console.log(typeof n);

// // Bool
// const isOpen = true;
// console.log(isOpen);
// console.log(typeof isOpen);

// // Null
// const a = null;
// console.log(a);
// console.log(typeof a);

// // undefined
// let nada;
// console.log(nada);
// console.log(typeof nada);

// // Array
// const linguagens = ['C++', 50, 'Python', 'JavaScript'];
// console.log(typeof linguagens);
// console.log(linguagens[0]);
// console.log(typeof linguagens[0]);
// console.log(linguagens[1]);
// console.log(typeof linguagens[1]);

// // object literals
// const user = { 
//     username: 'hermann.almeida', 
//     password: '123456',
//     age: 29,
//     name: 'Hermann'
// }

// console.log(user);
// console.log(typeof user);


// // métodos de Strings
// const text = "qualquer um";
// console.log(text.length);
// // Quabrar texto em um conjunto de caracteres
// const textToArray = text.split('quer');
// console.log(textToArray[1]);
// console.log(text.toLocaleUpperCase());

// // Procurar algo dentro de uma string
// console.log(text.indexOf('um'));
// console.log(text.indexOf('abc'));
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text.slice(2, 4));

// // Mais sobre arrays
// const chars = ['AAA', 'B', 'C', 'D', 88];
// console.log(chars.length);
// console.log(chars[chars.length - 1]);
// chars[5] = 'F';
// console.log(chars);
// chars.push('H');
// console.log(chars);
// chars.pop();
// chars.pop();
// console.log(chars);
// chars.unshift('VV');
// console.log(chars);

// //  Desafio 01 ==================================================================

// // const num1 = new FormData(document.querySelector('form'));
// // const inputValue1 = num1.get("num1");
// // console.log(inputValue1);

// // const num2 = new FormData(document.querySelector('form'));
// // const inputValue2 = num2.get("num2");
// // console.log(inputValue2);

// // const valueConv1 = Number(inputValue1);
// // const valueConv2 = Number(inputValue2);
// // const soma = valueConv1 + valueConv2;
// // // console.log(soma);
// // // console.log(typeof soma);

// // const subtracao = inputValue1 - inputValue2;
// // // console.log(subtracao);
// // // console.log(typeof subtracao);

// // const multiplicacao = inputValue1 * inputValue2;
// // // console.log(multiplicacao);
// // // console.log(typeof multiplicacao);

// // const divisao = inputValue1 / inputValue2;
// // // console.log(divisao);
// // // console.log(typeof divisao);
    
// //  ===========================================================================

// // Objects literal
// const product = {
//     productName: 'Camisa',
//     price: 29.99,
//     inStock: true,
//     size: ['p', 'm', 'g'],
//     'main color': 'red'
// }

// console.log(product.size[product.size.length-1]);
// console.log(product.price);
// console.log(product['main color']);

// // destructuring - desestruturação
// let { productName, price } = product;
// console.log(productName);
// price = 30.49;
// console.log(price);
// console.log(product.price);

// const vector = [3, 7, 2, 45, 99];
// let [ v1, v2, ...otherVector ] = vector;
// console.log(otherVector);

// // JSON - JacaScript Object Notation

// // criando o objeto cachorro
// const dog = {
//     name: 'Scooby',
//     age: 10
// }

// console.log(dog);
// const dogJson = JSON.stringify(dog);
// console.log(dogJson);
// const dogObject = JSON.parse(dogJson);
// console.log(dogObject);

// const jsonErrado = '{"primeiro":"dado1","segundo":222,"terceiro":"dado3}';
// const jsonErradoObject = JSON.parse(jsonErrado);

// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5.
// Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

// const vectorNumerico = [1, 2, 3, 4, 5];
// const vectorNumericoObject = {
//     n1: vectorNumerico[0],
//     n2: vectorNumerico[1],
//     n3: vectorNumerico[2],
//     n4: vectorNumerico[3],
//     n5: vectorNumerico[4]
// }

// const { n1, n2, n3, n4, n5 } = vectorNumericoJson;
// console.log(JSON.stringify({ n1, n2, n3, n4, n5 }));
 

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. 
// Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão 
// propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

// const num1 = 10;
// const num2 = 20;
// const calculadora = {
//     soma: num1 + num2,
//     subtracao: num1 - num2,
//     multiplicacao: num1 * num2,
//     divisao: num1 / num2
// }
// console.log(JSON.stringify(calculadora));

// 07/11/2022

const a = 5;
const b = 10;
const out = (`Quinze é ${a + b} 
e não ${2*a+b}.`);
console.log(out);

// Métodos de arrays
const names = ['Steve', 'Clark', 'Peter', 'Diana'];

names.forEach(function(name) {
    console.log(name);
});

const modifiedNames = names.map(function(name) {
    if(name === 'Clark') {
        return ('Clark Kent');
    } else {
        return name;
    }
});

modifiedNames.forEach(function(name) {
    console.log(name);
});

const numArray = [4, 43, 89, 98, 1, 0, -35, 57].filter(function(num){
        return num < 10;
});

numArray.forEach(function(num) {
    console.log(num);
});

console.log(numArray);

const sumArray = numArray.reduce(function(num1, num2){
    return num1+num2;
});
console.log(sumArray);

// Funções
function myFunction() {
    return "Testando";
}
console.log(myFunction());    

function myfunction2(name, surname){
    return `O nome completo é ${name} ${surname}.`;
}

console.log(myfunction2('Peter', 'Parker'));

// Arrow function === função anonima
// function(data) { return 0; }
const myArrowFunction = (a, b) => a + b;    
console.log(myArrowFunction(5, 16));

// Desafio: Transforme a função a seguir em uma arrow function. ======================
const resultado = (x) => () => (x+5);
console.log(resultado(7)());

// const namesLength = names.map( (value) =>  value.length);
const namesLength = names.map( ({length}) =>  length);

console.log(namesLength);

// Orientação a objeto
class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productDetails() {
        return `O nome do produto é ${this.name} e o preço é ${this.price}.`;
    }

    static test() {
        console.log('Testando método estático...');
    }

}

// Herança
class Tenis extends Product{
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    showNumber() {
        return `O tamanho do ${this.name} é ${this.size}.`;
    }

    productDetails() {
        return `O nome do produto é ${this.name}, o tamanho é ${this.size} e o preço é ${this.price}.`;
    }

}

// Instanciando um objeto product
const shirt = new Product('Camisa branca', 19.99);
console.log(shirt.productDetails());

const sock = new Product('Meia cinza', 2.49);
console.log(sock.productDetails());

Product.test();

const tenis = new Tenis('tenis Nike Jordan', 12000.00, '42');
console.log(tenis.showNumber());
console.log(tenis.productDetails());

// DOM - Document Object Model
console.log(document.getElementById('titulo'));
// console.log(document.getElementsByClassName('text'));
const texts = document.querySelectorAll('.text');
console.log(texts);

texts.forEach((data) => console.log(data));

texts[0].textContent = 'Estou alterando o primeiro parágrafo.';

texts[0].innerHTML = '<span>Testando alteração...</span>';

texts[1].style.backgroundColor = 'red';

texts[2].remove();

const button = document.querySelector('#btn');
button.addEventListener('click', () => (texts[3].style.backgroundColor='orange'));