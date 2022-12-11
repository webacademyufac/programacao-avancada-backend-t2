const list = document.querySelector('#list')
fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => {
      response.json().then((data) => {
         data.forEach(pessoa => {
            let node = document.createElement("li")
            node.appendChild(document.createTextNode(`nome: ${pessoa.name}, email: ${pessoa.email}`))
            list.appendChild(node)
         })
      })
   })
   .catch((error) => console.log(error))