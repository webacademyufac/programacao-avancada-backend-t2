fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then(users => users.map((item) => {
        let nomes = document.getElementById('lista')
        nomes.innerHTML += `<li>nome: ${item.name} email: ${item.email}</li>`
    }))
    .catch((error) => {
        console.log('Não foi posssível obter os dados' + error)
    })
