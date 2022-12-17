// transformar a função a seguir em uma arrow function.

// (arrow) => ((x = 7(x+5)))
// console.log(arrow)
// function arrow(){
//     x = 7
//     function somaXmais5(){
//         return x+5
//     }
//     return somaXmais5()
// }

// console.log(arrow());

// const arrow = ((x = 7) => (x+5))
//  ja consegui
// console.log(arrow())

const arrow = ((x) => (x+5))
console.log(arrow(9))