//  Desafio  ==================================================================

const num1 = new FormData(document.querySelector('form'));
const inputValue1 = num1.get("num1");
console.log(inputValue1);

const num2 = new FormData(document.querySelector('form'));
const inputValue2 = num2.get("num2");
console.log(inputValue2);

const valueConv1 = Number(inputValue1);
const valueConv2 = Number(inputValue2);
const soma = valueConv1 + valueConv2;
// console.log(soma);
// console.log(typeof soma);

const subtracao = inputValue1 - inputValue2;
// console.log(subtracao);
// console.log(typeof subtracao);

const multiplicacao = inputValue1 * inputValue2;
// console.log(multiplicacao);
// console.log(typeof multiplicacao);

const divisao = inputValue1 / inputValue2;
// console.log(divisao);
// console.log(typeof divisao);

// Desafio: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5.
// Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vectorNumerico = [1, 2, 3, 4, 5];
const vectorNumericoObject = {
    n1: vectorNumerico[0],
    n2: vectorNumerico[1],
    n3: vectorNumerico[2],
    n4: vectorNumerico[3],
    n5: vectorNumerico[4]
}

const { n1, n2, n3, n4, n5 } = vectorNumericoJson;
console.log(JSON.stringify({ n1, n2, n3, n4, n5 }));
 

// Desafio: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. 
// Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão 
// propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10;
const num2 = 20;
const calculadora = {
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num1 / num2
}
console.log(JSON.stringify(calculadora));

// Desafio: Transforme a função a seguir em uma arrow function. ======================
const resultado = (x) => () => (x+5);
console.log(resultado(7)());

// Desafio da Hora

function functionDate() {
    const dt = new Date();
    const h = dt.getHours();
    const m = dt.getMinutes();
    const s = dt.getSeconds();
    console.log(`Hora: ${h}:${m}:${s}`);
}

setTimeout(functionDate, 5000);
setTimeout(functionDate, 5000);
// setTimeout(functionDate, 5000);
setInterval(functionDate, 5000);
