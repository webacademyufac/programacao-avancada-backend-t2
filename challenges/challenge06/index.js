
fetch('http://jsonplaceholder.typicode.com/users') // Objeto do JavaScript (ES6) que funciona como uma Promise e trabalha requisições e respostas HTTP
.then((resp) => resp.json()) 
.then(function(dado){ // 
    return dado.map(function(item){ 
        const li = document.createElement('li')
        li.innerHTML = `Nome: ${item.name} | Sobrenome: ${item.username}` 
        document.getElementById('nomes').appendChild(li) // 
    })
})
.catch((error) => {
    console.log('Algo não deu certo: ' + error)
})