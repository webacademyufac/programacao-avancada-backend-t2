/* fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())
.then((dt)=>{
    return dt.map(function(item){
        const li = document.createElement('li')
        li.innerHTML = `Nome: ${item.name}, E-mail: ${item.email}` 
        document.querySelector('ul').appendChild(li) 
    })

}) */