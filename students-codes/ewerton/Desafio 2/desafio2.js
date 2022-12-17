//QUATRO OPERAÇÕES BÁSICAS DE MATEMÁTICA
function somar (n1, n2){
    return n1 + n2
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}

// crie um objeto calculadora
const calculadora = {
  // inicialize cada uma das operações da calculadora, 
  //que serão propriedades do objeto
  somar: somar(10, 2),
  subtrair: subtrair(10, 2),
  multiplicar: multiplicar(10, 2),
  dividir: dividir(10, 2),
}
//com o resultado do processamento matemático vindo de duas variáveis (n1, n2) e 
//converta para um objeto JSON.
console.log(JSON.stringify(calculadora))