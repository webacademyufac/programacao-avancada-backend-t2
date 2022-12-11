// console.log("Texto dentro de um log")
// console.error("Essa é uma mensagem de erro")
// console.warn("Isso ẽ um alerta")

const htmlForm = document.querySelector("form")

const somaBtn = htmlForm.querySelector('[name="somar"]')
somaBtn.addEventListener("click", function(event) {
    const formData = new FormData(document.querySelector("form"))
    const operando1 = Number.parseFloat(formData.get("operando1"))
    const operando2 = Number.parseFloat(formData.get("operando2"))
    console.log(operando1+operando2)
    event.preventDefault()
})

const subtraiBtn = htmlForm.querySelector('[name="subtrair"]')
subtraiBtn.addEventListener("click", function(event) {
    const formData = new FormData(document.querySelector("form"))
    const operando1 = Number.parseFloat(formData.get("operando1"))
    const operando2 = Number.parseFloat(formData.get("operando2"))
    console.log(operando1-operando2)
    event.preventDefault()
})

const multiplicarBtn = htmlForm.querySelector('[name="multiplicar"]')
multiplicarBtn.addEventListener("click", function(event) {
    const formData = new FormData(document.querySelector("form"))
    const operando1 = Number.parseFloat(formData.get("operando1"))
    const operando2 = Number.parseFloat(formData.get("operando2"))
    console.log(operando1*operando2)
    event.preventDefault()
})

const dividirBtn = htmlForm.querySelector('[name="dividir"]')
dividirBtn.addEventListener("click", function(event) {
    const formData = new FormData(document.querySelector("form"))
    const operando1 = Number.parseFloat(formData.get("operando1"))
    const operando2 = Number.parseFloat(formData.get("operando2"))
    console.log(operando1/operando2)
    event.preventDefault()
})


const [ n1, n2, n3, n4, n5 ] = Array.of(1,2,3,4,5)
obj = { 'n1': n1, 'n2': n2, 'n3': n3, 'n4': n4, 'n5': n5 }
json = JSON.stringify(obj)
console.log(json)


const calc = {
  opera1: 0,
  opera2: 0,
  calcula() {
	obj =  { 'soma': (this.opera1 + this.opera2), 'subtracao': (this.opera1 - this.opera2) , 
               'multiplicacao': (this.opera1 * this.opera2), 'divisao': ( this.opera1 / this.opera2 ) }
     console.log(	JSON.stringify(  obj   ) )
  }
};