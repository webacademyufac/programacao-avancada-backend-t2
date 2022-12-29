//desafio 01 da aula 04
//tranformar uma função em arrow function

// function out(){
//     let x = 7
//     function sumXand5(){
//         return x+5
//     }
//     return sumXand5()
// }
const ArrowSoma = (x = 7) => () => (x + 5)

console.log(ArrowSoma())
const newArrow = () => ((x=7), ()=> (x+5)) ()

console.log(newArrow)

