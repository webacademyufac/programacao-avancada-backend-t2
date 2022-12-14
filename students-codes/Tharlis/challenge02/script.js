const vetor = [1, 2, 3, 4, 5]
const objectValores = {
    n1: vetor[0],
    n2: vetor[1],
    n2: vetor[2],
    n3: vetor[3],
    n4: vetor[4]
}

let {n1, n2, n3, n4, n5} = objectValores


const json = JSON.stringify({n1, n2, n3, n4, n5})
console.log(json)

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

console.log(resultJson)