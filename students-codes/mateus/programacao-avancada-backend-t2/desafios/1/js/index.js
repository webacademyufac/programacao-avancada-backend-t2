
// ======== Atividade primeira aula

// function action() {
//    const formData = new FormData(document.getElementById('calc-form'));
//    if (formData.get('operation') == '1') {
//       console.log(parseInt(formData.get('first-number')) + parseInt(formData.get('secound-number')))
//    } else if (formData.get('operation') == '2') {
//       console.log(parseInt(formData.get('first-number')) - parseInt(formData.get('secound-number')))

//    } else if (formData.get('operation') == '3') {
//       console.log(parseInt(formData.get('first-number')) * parseInt(formData.get('secound-number')))

//    } else if (formData.get('operation') == '4') {
//       console.log(parseInt(formData.get('first-number')) / parseInt(formData.get('secound-number')))

//    }
// }

// ======== Atividade aula 04/11/2022

//desafio 1

/*
Desafio: desenvolva uma calculadora para as 4 operações básicas usando const com os dados vindo de um formulário.
Link para auxiliar na resolução: https://www.horadecodar.com.br/2022/01/31/como-pegar-dados-de-formulario-com-javascript/
Se não conseguir com o que está proposto no link, usar document.getElementById().

*/

const d1Array = [1, 2, 3, 4, 5]
const d1Object = {
   n1: d1Array[0],
   n2: d1Array[1],
   n3: d1Array[2],
   n4: d1Array[3],
   n5: d1Array[4]
}

const { n1, n2, n3, n4, n5 } = d1Object

console.log("Resultado desafio 1:")
console.log(JSON.stringify({ jsonN1: n1, jsonN2: n2, jsonN3: n3, jsonN4: n4, jsonN5: n5 }))

//desafio 2

const number1 = 2, number2 = 2;

console.log("Resultado desafio 2:")
console.log(JSON.stringify({
   soma: number1 + number2,
   subtracao: number1 - number2,
   multiplicacao: number1 * number2,
   divisao: number1 / number2
}))