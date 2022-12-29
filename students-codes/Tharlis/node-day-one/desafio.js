fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then((dado)=> (dado.forEach(item => {
        // const ul = document.querySelector('#text')

        const li = document.createElement('li')
        li.textContent = `nome: ${item['name']} e-mail: ${item.email}`
        document.querySelector('#text').appendChild(li)
        console.log(document.querySelector('#text').appendChild(li))

    })))