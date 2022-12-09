// https://jsonplaceholder.typicode.com/users
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json

function teste() {
    var lista = document.querySelector('ul');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        for (const user of data) {
            const ul = document.createElement('li');
            ul.textContent = "nome: " + user.name + ", email: " + user.email;
            lista.append(ul);
        }
    }).catch(console.error);
}