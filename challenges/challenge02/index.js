// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vectorChallenge = [1,2,3,4,5]

const objeto = {
    x1: vectorChallenge[0],
    x2: vectorChallenge[1],
    x3: vectorChallenge[2],
    x4: vectorChallenge[3],
    x5: vectorChallenge[4],
}

const {x1, x2, x3, x4, x5} = objeto

console.log(JSON.stringify({x1,x2,x3,x4,x5}))

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const n1 = 10
const n2 = 20
const calc = {
    soma: n1+n2,
    sub:  n1-n2,
    mult: n1*n2,
    div:  n1/n2
}
console.log(JSON.stringify(calc))
