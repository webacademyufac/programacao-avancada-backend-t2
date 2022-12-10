function sum() {
    const formData = new FormData(document.querySelector('form'))
    const n1 = formData.get('n1')
    const n2 = formData.get('n2')

    const add = parseInt(n1) + parseInt(n2)
    const sub = parseInt(n1) - parseInt(n2)
    const divi = parseInt(n1) / parseInt(n2)
    const mult = parseInt(n1) * parseInt(n2)

    console.log("adição: " + add)
    console.log("subtração: " + sub)
    console.log("divisão: " + divi)
    console.log("multiplicação: " + mult)
}
