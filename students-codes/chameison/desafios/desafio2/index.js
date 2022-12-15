// //DESAFIO 2 - AULA 03 -- LINHA 150 -ARQUIVO OFICIAL DAS AULAS
// let i
//desafio 1 
const vetor1 = [1,2,3,4,5]
const obj = {n1 : vetor1[0], n2: vetor1[1], n3: vetor1[2], n4: vetor1[3], n5: vetor1[4]}


let num1 = obj.n1
let num2 = obj.n2
let num3 = obj.n3
let num4 = obj.n4
let num5 = obj.n5

// //forma alternativa, fiz a de cima
// const {nn1, nn2, nn3, nn4, nn5} = obj

console.log(obj)

console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

console.log('{"n1":'+num1+', "n2":'+num2+', "n3": '+num3+', "n4": '+num4+', "n5": '+num5+'}')

//fim primeiro desafio

//desafio 2 - calculadora 
let numero1 = 10
let numero2 = 20
const calc = {
    soma: numero1 + numero2,
    sub: numero1 - numero2,
    mult: numero1 * numero2,
    div: numero1 / numero2
}
console.log(JSON.stringify(calc))

//fim segundo desafio da aula