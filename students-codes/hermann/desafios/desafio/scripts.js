// Desafio: Crie um documento HTML com apenas um elemento ul, ou seja, uma lista não ordenada. Em seguida, 
// crie um documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) 
// para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um 
// then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, 
// puxando o nome e email de cada dado para a lista no HTML. Trate também o erro, quando houver.
// Inicie suas pesquisas para resolver o problema em https://www.devmedia.com.br/javascript-fetch/41206.

fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    // .then(console.log)
    .then((dado) => (dado.forEach(item => {
        // console.log(`Nome: ${item.name} E-mail: ${item.email}`)

        const ul = document.querySelector('.text')
        // console.log(ul)

        const li = document.createElement('li')
        li.textContent = `Nome: ${item.name} E-mail: ${item.email}`
        ul.appendChild(li)
        console.log(li)

    })));
    
