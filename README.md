# programacao-backend-avancada
Repositório destinado à disciplina de Frameworks back-end avançado do curso Webacademy

## Aula 1: apresentação da disciplina

**Ementa:**

- Integrações entre back-end e frameworks fullstack: Node;
- Organização de projetos;
- I/O assíncrono;
- Promises;
- Módulos;
- Ferramentas para controle de pacotes;
- Repositórios NPM;
- Servidores;
- Webservices;
- Criação de APIs;
- Implementação de operações CRUD com banco de dados NoSQL; e
- Implementação com MongoDB.

**Objetivo:**

Utilizar o ambiente de execução `Node.js` (códigos em JS) para o desenvolvimento back-end, conectando e operando um banco de dados NoSQL (MongoDB).

**Unidades temáticas:**
- Conceitos fundamentais de JS (9 horas),

- Introdução ao Node.js (1 hora),

- Módulos (2 horas),

- Programação assíncrona (2 horas),

- Servidor HTTP (2 horas),

- Gerenciamento de dependências (1 hora),

- Criação de API (6 horas),

- Banco de Dados NoSQL (2 horas).

**Livros:**
- JavaScript: The definitive guide: master the world's most-used programming language. David Flanagan, O'Reilly Media, 2020.

- Construindo APIs REST com Node.js. Caio Ribeiro Pereira, Casa do Código, 2016.

- MongoDB: The definitive guide: powerful and scalable data storage. Eoin Brazil et al., O'Reilly Media, 2019.


**Links úteis:**

- MDN;
- http://roadmap.sh;

### Revisão e overview de JavaScript

O JavaScript é uma linguagem de programação de alto nível, que é considerada multiparadigma. Isso quer dizer que pode ser usado o paradigma procedural (funções sem argumentos), funcional (_pesquisar_) ou orientação a objetos, por exemplo.

É presente nos frameworks de front end (Angular, React) e pode ser utilizado no back-end através do `Node.js`.

**Código da aula de hoje em:** 

> `aula1/`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeira pagina de backend avançado</title>
</head>
<body>
    
    <script>
        let nuOab = "4689/AC";

        console.log("teste");
        console.error("numero de processo invalido");
        console.warn(`número de OAB é: ${nuOab}`);
    </script>

</body>
</html>
```

O `console` é um objeto (instância de uma classe) e `log`, `error`, `warn` são os métodos/funções.

O atributo `defer` no link ao javascript faz o processamento do javascript ser no fim da execução da página, evitando problemas de objetos nulos quando usar DOM.

### Aula 3

Object literals

Sintaxe geral:
```javascript
const product = {
    username: 'beangom',
    email: 'beanascigom@gmail.com';
    tel: '99205-0776';
};
```

### Aula 4
**Data:** 07/11/2022

O `forEach()` só é aceito com uma **função anônima** como argumento dele, do contrário é retornado um `undefined` por consequencia gerando um erro do tipo `TypeError`.

Revisar conceitos de métodos de arrays, `map`, `filter` e, principalmente, arrow functions.

- Métodos de arrays;

- `map`;

- `filter`;

- `reduce`;

- Usar o depurador, debug;

- Avaliar os commits `f8706eda772f1e3ce5feead88845e984bc91e9ea` e `04124fca7b97e13a2bb20fd712c78d4034aa9ad1`;

- arrow function (=== funcoes anonimas)

**menor linha de uma arrow function, que soma dois números `x` e `y`:**

```javascript
const myArrowFunction = (x, y) => x+y;
```

onde `= (x,Y)` diz respeito a um **conjunto de parâmetros**

essas arrows functions definem a **programação assíncrona**

### Aula 5
**Data:** 08/11/2022

Testar a existência (ou não) de construtores padrão no javascript

**DOM**

**D**ocument**O**bject**M**odel

**Desafio extra:** 
```javascript
texts[0].textContent = "Bea";
```
mudou o parágrafo no HTML.

> Como mudar apenas no JavaScript mantendo o conteúdo no HTML?

Linha de pesquisa: o que de fato o `textContent` faz?

### Aula 6

Pesquisar sobre closures. De antemão, closure diz respeito aos fechamentos e escopos. 

```javascript
let varX = 50
function out(){
    let varX = 35
    function sumXand5(){
        let varX = 10
        return varX+5
    }
     return sumXand5()
}
console.log(out())
```

- Instalando a versão 18.12.1 LTS
Node.js runtime : ambiente de execução node.js. Pode ser entendido como "alguém" que entede de javascript, dispensando a necessidade de uso do navegador.

A partir desta aula todo o código será a partir da pasta `node-day-01`.

O código da aula da pasta supracitada **sobe um servidor local**. Qual utilidade? Fazer deploy de uma API, por exemplo.

Documentação do Node.js: https://nodejs.org/dist/latest-v18.x/docs/api/http.html

Class: `http.Agent`


// callbacks

// promises

// programação assíncrona

#### Overview pelo slide

As funções JS são executadas na sequência em que são chamadas. De início, elas são carregadas completamente e depois executadas.

Suponhamos o seguinte cenário: queremos exibir o resultado de um cálculo. Podemos chamar uma função de calculadora (`myCalculator`), salvar o resultado e chamar outra função (`myDisplayer`) para exibir este resultado.

```javascript
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);
```

Outra opção:

```javascript
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
```

O problema com a primeira opção é que é necessário executar duas funções para exibir o resultado e o problema com o segundo exemplo é que não é possível executar a função `myDisplayer` sem executar a função `myCalculator`.

Em termo de código, o callback funciona quando você passa uma função como parâmetro de outra, mas não invocando-a.

```javascript
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

Usar callback libera o programa para continuar. Um exemplo: funções assíncronas, onde uma função tem que esperar por outra (como esperar o carregamento de um arquivo).

**Para que serve o Node.js?**
> Backend, frontend, microsservices, scripts e automações, API web, API mobile e API desktop.

**Vantagens:**
- rápido para ser executado;

- ecossistema grande (npm);

- alta escalabilidade.

Para verificar a versão do V8 (cara que processa o javascript no nodo) na versão do Node.js, rodar no terminal:
`node -p process.versions.v8`.

Pesquisar sobre programação assíncrona.

Código 1:
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Aula 7

- fetch

O callback (passar uma função como argumento de outra) gera uma programação assíncrona.

- promises

- inferno de callback / inferno de retorno de chamada / callback hell

- programação síncrona

- `Promise`: é uma classe que simboliza uma forma de escrever callbacks de uma melhor forma.
    - `then()` => método que é executado quando temos sucesso na callback.
    - `resolve`: status da função quando é resolvida sem erro.
    - `reject`: status da função quando ela **não** é resolvida ou é resolvida **com erro**.

### Aula 8 (eu faltei)

**Class: `EventEmitter`**: https://nodejs.org/api/events.html#class-eventemitter

- Classe que foi usada no `project-logger/logger.js`.

Segundo este [blog](https://blog.matheuscastiglioni.com.br/criando-um-event-emitter/), a classe `EventEmitter` serve para receber e emitir eventos em aplicações. Exemplos de eventos: *click*, *scroll*, *hover*, *focus*, etc. 

Cada vez que criamos um **emissor de eventos** (`EventEmitter`), é interessante que criemos um *listener* (um "ouvinte"). De grosso modo, o "ciclo de vida de um `EventEmitter` é:

> receber vários *listeners* e salvá-los em algum lugar de forma agrupada. Verificar se existe algum *listener* para algum evento **específico** e realizar a chamada para ele.

1. Criar um `EventEmitter`.
2. Criar uma função para definir um *listener*.
3. Salvar o *listener*.
4. Agrupar os *listeners* por tópicos.
5. Criar uma função para **emitir** um evento.
6. Buscar todos os *listeners* desse evento.
7. Chamar todos os *listeners*.

Abri a issue `#2` no repositório oficial da disciplina para tirar uma dúvida. Link: https://github.com/webacademyufac/programacao-avancada-backend-t2/issues/2


### Aula 9

Aplicação que simula os favoritos do computador.

Localização: `./project-favorites`


### Aula 10

**Data:** 05/12/202 (retorno)

A instrução `let { valor } = input`, em project-favorites\public\scripts.js, devemos lembrar que `valor` se trata de um `Object`.

Apagamos o `package.json` e o `node_modules`.

Vamos até a pasta project-favorites e rodamos `npm init -y` dentro de project-favorites. Ainda dentro da pasta, vamos instalar o nodemon com suas dependências através do comando `npm i nodemon -D`.

Uma vez que o `nodemon` está no `package.json` não precisamos mais, ao mudar a máquina de desenvolvimento, rodar o comando acima novamente. Basta executar o `npm i`.

Ao digitar `npm start` ele irá executar o servidor. Isso ocorre porque no `package.json` tem o seguinte "atalho":

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
```

Podemos substituir o `node server.js` por `nodemon server.js` e quando dermos o `npm start` ele vai monitorar todas as alterações e restartar o servidor automaticamente evitando o trabalho de parar e rodar de novo.

---

**Vídeo O que é API?**

Cliente (pag web, celular)
Garçom (API)
Cozinha (Server)

API é um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utiizar as funcionalidades desta aplicação.

- Responsáel por estabelecer comunicação entre diferentes aplicações;

O que não é API, é monolito (?): Django por exemplo.

---

*Seguindo o 20221205-roteiro.pdf*

