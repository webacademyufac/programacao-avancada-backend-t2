
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

// const d1Array = [1, 2, 3, 4, 5]
// const d1Object = {
//    n1: d1Array[0],
//    n2: d1Array[1],
//    n3: d1Array[2],
//    n4: d1Array[3],
//    n5: d1Array[4]
// }

// const { n1, n2, n3, n4, n5 } = d1Object

// console.log("Resultado desafio 1:")
// console.log(JSON.stringify({ jsonN1: n1, jsonN2: n2, jsonN3: n3, jsonN4: n4, jsonN5: n5 }))

//desafio 2

const number1 = 2, number2 = 2;

console.log("Resultado desafio 2:")
console.log(JSON.stringify({
   soma: number1 + number2,
   subtracao: number1 - number2,
   multiplicacao: number1 * number2,
   divisao: number1 / number2
}))

// const a = 5, b = 10, out = 'Quinze é ' + (a + b) + '\ne não ' + (2 * a + b) + '.';

// console.log(`Quinze é ${a + b}
// e não ${2 * a + b} .`)

// let c = [0, 1]
// c.filter((num) => { 0 < 10 ? console.log(typeof (num)) : null; })

// c.map()
// c.forEach()

// c.reduce

// c = ['a', 'a']

// c.reduce(() => { })


// const fora = () => (x) => x + 5

// console.log(fora()(7))