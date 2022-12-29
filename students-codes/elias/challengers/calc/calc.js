function sum(){
const formData = new FormData(document.querySelector('form'))
const num1 = formData.get("num1")
const num2 = formData.get("num2")
const op = formData.get("operacao")
calculo = eval(num1+op+num2)
console.log(calculo)
}
