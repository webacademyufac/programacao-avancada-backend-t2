    //Desafio 01: desenvolva uma calculadora para as 4 operações básicas usando const com os dados vindo de um formulário.

    /*
    function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1 = formData.get('n1')
    const n2 = formData.get('n2')
    console.log(n1+' '+n2)
    }


// Desafio 2: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vetor = [8,10,12,14,16]
console.log(vetor)

let [v1, v2, v3, v4, v5] = vetor
console.log(v2)

let vetJson = JSON.stringify(vetor)
console.log(vetJson)

const destruindoJson = `{

    "n1": ${v1},
    "n2": ${v2},
    "n3": ${v3},
    "n4": ${v4},
    "n5": ${v5}

}`
console.log(destruindoJson)


// Desafio 3: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10
const num2 = 20
const calc = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}
const jsonCalculadora = `{"numero01":8, "numero02":4}`
console.log(jsonCalculadora)


const numerosJson = JSON.parse(jsonCalculadora)
console.log(numerosJson)

const numeroA = numerosJson.numero01
console.log(numeroA)

const numeroB = numerosJson.numero02
console.log(numeroB)

//soma
const soma = numeroA + numeroB


//sub
const sub = numeroA - numeroB

//mult
const mult = numeroA * numeroB

//divid

const div1 = numeroA / numeroB

const div2 = numeroB / numeroA


console.log("soma: ", soma)
console.log("subtração: ", sub)
console.log("multiplicação: ", mult)
console.log("divição A por B: ", div1)
console.log("divição B por A: ", div2)

--------------------------------------------------------------------------------------------------
Desafio 04 : Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com um valor estático (5, por exemplo) como retorno. Outro código importa o primeiro e declara uma variável com o mesmo nome e outro valor. Em seguida, chama a função do primeiro código. Qual valor será exibido?


let varX = 10

    function sumXand5(){
        return varX+5
    }
    export {sumXand5, varX}
/*


---------------------------------------------
function fora (){
    let x=7
    function somaXMais(x){
        return x + 8

    }
    return somaXMais()
}
() => ( (x=7) => (x=5))


Desafio 05: utilize a classe nativa Date para, dentro de uma função, exibir via console uma string com a hora, minutos e segundos atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?


function myFunction(){
const data = new Date()
const hora = data.getHours()
const minutos = data.getMinutes()
const segundos = data.getSeconds()

const string = `são agora ${hora}:${minutos}:${segundos}`
console.log(string)
}
setTimeout(myFunction, 5000)
setTimeout(myFunction, 5000)
setTimeout(myFunction, 5000)
setInterval(myFunction, 5000)
console.log("pedro antônio")



/*Desafio 06 : Crie um documento HTML com apenas um elemento ul, ou seja, uma lista não ordenada. Em seguida, crie um documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e email de cada dado para a lista no HTML. Trate também o erro, quando houver.
Inicie suas pesquisas para resolver o problema em https://www.devmedia.com.br/javascript-fetch/41206.

fetch('http://jsonplaceholder.typicode.com/users')

.then((response) => response.json()) // passando a reposta do json
.then((data) => { //data e onde fica os dados brutos formato objeto
    const name = data.map((user) => user.name) // mapeando os dados nome para jogar na variavel do tipo vetor
    const email = data.map((user) => user.email)
    console.log(name)
    console.log(email)

    const ul = document.querySelector('ul') // selecionando um objeto da pasta html
    for(let i = 0; i < name.length; i++) { // percorrendo o vetor ate o fim dos elementos
        const li = document.createElement('li') // criando o elementos e adicionado 
        li.textContent = name[i]+' _ ' + email[i]
        ul.appendChild(li)//adiciona um novo ul
}


})
*/