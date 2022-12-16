// Criando um vetor com 5 dados numericos
const vectorNumeric = [1,2,3,4,5]
console.log(vectorNumeric)
// Copiando o valor do vetor para um object
const NumericObject = {
    n1 : vectorNumeric[0],
    n2 : vectorNumeric[1],
    n3 : vectorNumeric[2],
    n4 : vectorNumeric[3],
    n5 : vectorNumeric[4]
}
console.log(NumericObject)

let { n1, n2, n3, n4, n5 } = NumericObject

const jsonNumericManual = `{${n1}}`

const objectVariables = {
    valuerOne: n1,
    valuetwo: n2,
    valuethree: n3,
    valuefour: n4,
    valuefive: n5
}

const jsonNumeric = JSON.stringify(objectVariables)
console.log(jsonNumeric)

// DESAFIO 2
function captura(){
    const formData = new FormData(document.querySelector("form"))
    n1 = formData.get("n1")
    n2 = formData.get("n2")
    const calculadora = {
        sum: Number(n1) + Number(n2),
        sub: Number(n1 - n2),
        mult:Number(n1 * n2),
        div: Number(n1 / n2)
    }
    const jsonResult = JSON.stringify(calculadora)
    console.log(jsonResult)
}
