fetch('http://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
        data.forEach(element => {
            ul = document.querySelector('ul')
            li = document.createElement('li')
            li.innerHTML = `${element.name}, ${element.email}`
            ul.appendChild(li)
        });
   });




