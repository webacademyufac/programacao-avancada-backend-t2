// desafio 1
vector = [11,22,33,44,55]

const objValues = {
    valor1:vector[0],
    valor2:vector[1],
    valor3:vector[2],
    valor4:vector[3],
    valor5:vector[4],
}

let {valor1, valor2, valor3, valor4, valor5} = objValues

console.log(valor1)

jsonValues = JSON.stringify({valor1,valor2,valor3,valor4,valor5})

console.log(jsonValues)