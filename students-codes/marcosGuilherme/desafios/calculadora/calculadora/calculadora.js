// Numbers
const numberSeven = document.getElementById("seven").addEventListener("click", seven)
console.log(numberSeven)
// Operations
let statusSum = false
let statusSub = false
let statusDivide = false
let statusMult = false
const operationNumberSum = document.getElementById("plus").addEventListener("click", () => {
    console.log(statusSum = true)
})

const operationNumberSub = document.getElementById("minus").addEventListener("click", () => {
    statusSub = true
})

const operationNumberDiv = document.getElementById("divide").addEventListener("click", () => {
    statusDivide = true
})

const operationNumberMult = document.getElementById("mult").addEventListener("click", () => {
    statusMult = true
})


function seven(){
    const firstNumber = document.getElementById("resultado").innerHTML = "7"
    console.log(firstNumber)
}

// DELETE FUNCIONANDO
const deleteNumbers = document.getElementById("delete").addEventListener("click", ()=>{
    document.getElementById("resultado").innerHTML = "0"
})

// OPERAÇÕES ARITMETICAS 
function operationAritmetic(){
} 