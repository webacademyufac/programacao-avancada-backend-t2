let valor1 = 2
let valor2 = 5
let calculadora = {
    sum: valor1+valor2,
    sub: valor1-valor2,
    div: valor1/valor2,
    mul: valor1*valor2
}
console.log(calculadora)

const calculadoraJson = JSON.stringify(calculadora)
console.log(calculadoraJson)
