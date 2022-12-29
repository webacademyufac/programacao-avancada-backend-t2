let esse = fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())
.then(arr => {
    const ul = document.querySelector('#ul_index')
    arr.forEach(element => {
        let liNova = document.createElement('li');
        // liNova.textContent = `O nome é ${element['name']} e o email é ${element['email']}`
       let conteudoNovo = document.createTextNode(`O nome é ${element['name']} e o email é ${element['email']}`);
        liNova.appendChild(conteudoNovo); 
        ul.appendChild(liNova);
    });
})
.catch(console.error)
