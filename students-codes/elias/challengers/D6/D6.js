
fetch('http://jsonplaceholder.typicode.com/users')
.then(J => J.json())
.then(K => (K.forEach((v, indice) => {
    const li = document.createElement('li') 
    li.textContent = (`${K[indice].name}, ${K[indice].email}`)
    document.querySelector('#ul').appendChild(li)
})))
.catch(() => (console.log('deu algo errado!')))
