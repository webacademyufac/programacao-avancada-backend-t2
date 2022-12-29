// desenvolver um calculadora

function sum() {
    const formData = new FormData(document.querySelector('formulario'))
    const number1 = formData.get('number1')
    const number2 = formData.get('number2')
    console.log(number1+number2)
}