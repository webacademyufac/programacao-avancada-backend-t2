function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1 = parseFloat(formData.get("n1"))
    const n2 = parseFloat(formData.get("n2"))
    
    const jsonCalc = {
        mais: n1+n2,
        menos: n1-n2,
        mult: n1*n2,
        div: n1/n2
    }
    console.log(jsonCalc)
    jsonCalc2 = JSON.stringify(jsonCalc)

    console.log(jsonCalc2)
}

