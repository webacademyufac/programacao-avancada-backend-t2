/* const a = 5 
const b = 10 
const out = ('Quinze é' + (a+b) + ' \ne não ' + (2*a+b) + '.')
console.log(out) */

// literals , usando `` crazes e ${} para concatenar a variavel 
/* const a = 5 
const b = 10 
const out = `Quinze é ${(a+b)} \ne não ${(2*a+b)}.`  
console.log(out) 
 */

// métodos de arrays 

//forEach() - percorre os dados e os mostra. Não pode alterar. 
/* const names = ['Victor', 'Paulo', 'Elias', 'Fabiana'] 
names.forEach(function(name){
    console.log(name)

})  */

//map() - vai percorrer e na medida vai perguntando se é o mesmo. Podendo alterar. 
/* const modifiedNames = names.map(function(name){
    if(name == 'Paulo')
        return ('Paulo Sampaio')
    else 
        return name
}) 

modifiedNames.forEach(function(name){
    console.log(name)
}) 
 */
//filter() - vai retornar uma lista a partir do que eu tratar ou solicitar. Ele vai retornando um de cada vez. 
/* errado - o filter estava retornando 0, o certo seria return name < 10 , ao inves de return name. 

const numArray = [90,-4,6,22,0,36,1,4].filter(function(name){
    if(name < 10)
        return name                                 
})
numArray.forEach(function(name){
    console.log(name)
}) errado */

// certo - coloquei o return num < 10. 
/* const numArray = [90,-4,6,22,0,36,1,4].filter(function(num){
    return num < 10 
})
numArray.forEach(function(num){
    console.log(num)
})
console.log(numArray)


// reduce - processamento matematico devolvendo 1 valor so. Transforma um conjunto de dados como 1 valor de saida.
//função anonima com 2 parametros. 

sumArray = numArray.reduce(function(num1, num2){
    return num1+num2  
})
console.log(sumArray)  */

//funções
// função anonima = function()
// função normal: function myFunction() 

// um modelo 
/* function myFunction(){
    console.log('Testando Minha Função.........')
}

myFunction() */

// outro modelo

/* function myFunction(){
    return 'Testando Minha Função.........'
}

console.log(myFunction()) */ 

// função usando parametros ja descritos. 
/* function myFunction(name, surname){
    return `O nome completo é ${name} ${surname}`
}
console.log(myFunction('Paulo', 'Sampaio')) */

// arrow function === função anônima 
// => (metodo fetch) - estudar sobre fetch 
// function(data){ return 0; }
// ele é uma função anonima com apontamento
//(data) => 0 //arrow function escrita em codigo 

/* SEM SER ARROW FUNCTION 
const myArrowFunction = function(a,b){
    return a+b 
}
console.log(myArrowFunction(5,2)) */

// ESCRITA A FUNÇÃO EM ARROW FUNCTION ABAIXO 
// PROGRAMAÇÃO ASSÍNCRONA 

/* const myArrowFunction = (a,b) => a+b 
console.log(myArrowFunction(5,2)) */

