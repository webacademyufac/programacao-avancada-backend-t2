function funCalculate(){
    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")
    let operation = document.getElementById("operation")
    let result = document.getElementById("result")
    let op = operation.options[operation.selectedIndex].value
    switch (op) {
        case "+":
            result.innerHTML=parseInt(num1.value)+parseInt(num2.value)
            break;
        case "-":
            result.innerHTML=parseInt(num1.value)-parseInt(num2.value)
            break;
        case "*":
            result.innerHTML=parseInt(num1.value)*parseInt(num2.value)
            break;
        case "/":
            result.innerHTML=parseInt(num1.value)/parseInt(num2.value)
            break;
        default:
            break;
    }
    
}
