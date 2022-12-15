function calcular() {
    let resultado
    let numero1 = document.getElementById('num1').value;
    numero1 = parseFloat(numero1)
    let numero2 = document.getElementById('num2').value;
    numero2 = parseFloat(numero2)
    let opera = document.getElementById('opera').value;
     
    if(opera == '+') {
        resultado = numero1 + numero2;
    }
    else if(opera == '-'){
        resultado = numero1 - numero2
    }
    else if (opera == '*') {
        resultado = numero1 * numero2;
    }
    else if (opera == '/') {
        resultado = numero1 / numero2
    }
    document.getElementById('result').innerHTML = 'Resultado: ' +  resultado;
}

// proposta professor
// function calcu(){
//     let formData = new FormData(document.querySelector('form'));
//     let n1 = formData.get('n1')
//     n1 = parseFloat(n1)
//     let n2 = formData.get('n2')
//     n2 = parseFloat(n2)
//     let opera = formData.get('opera')
// }

