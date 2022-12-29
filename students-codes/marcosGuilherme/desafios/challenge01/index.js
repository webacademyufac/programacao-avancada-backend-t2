function sum(){
    const formData = new FormData(document.querySelector("form"))
    const n1 = Number(formData.get("numero1"))
    const n2 = Number(formData.get("numero2"))
    console.log(n1 + n2)
}