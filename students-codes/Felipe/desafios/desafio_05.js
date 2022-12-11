
fetch('http://jsonplaceholder.typicode.com/users')
.then((T) => T.json())
.then((pessoa)=>{
  return pessoa.map(function(itens){

      const li = document.createElement('li')
      li.innerHTML = `<strong><br> NOME:</strong> ${itens.name} <strong><br> Email:</strong> ${itens.email}`
      document.getElementById('exec6').appendChild(li)

    })
        
})


