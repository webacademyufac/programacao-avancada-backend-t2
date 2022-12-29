
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resposta => resposta.json())

  .then(function (dado){
    return dado.map(function(item){
      const li = document.createElement('li')
      li.innerHTML = `nome: ${item.name} emai: ${item.email}`
      document.querySelector('ul').appendChild(li)
    })
  })
  .catch((error) => {
    const li = document.createElement('li')
    li.innerHTML = "Houve um erro"
    document.querySelector('ul').appendChild(li)
  })

  // fetch('atv6/teste.json')
  // .then(re => re.json())

  // .then(function (dados){
  //   return dados.map(function(item){
  //     const li = document.createElement('li')
  //     li.innerHTML = `raca: ${item.raca} nome: ${item.name}`
  //     document.querySelector('ul').appendChild(li)
  //   })
  // })



//   function cadastraUsuario (body) {
//     const options = {
//       method: 'POST',
//       body: Object.keys(body)
//         .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
//         .join('&')
//     }

  //   return fetch('http://exemplo.com/usuario', options)
  //     .then(T => T.json())
  // }

//   cadastraUsuario({ nome: 'Bruno', sobrenome: 'Carvalho de Araujo' })
//     .then(() => console.log('cadastrado'))
//     .catch(() => console.log('falha ao cadastrar'))

  
//   // .then(console.log)

  // requisição com o XMLHttpRequest
  // const request = new XMLHttpRequest()

  // request.open('GET', 'http://exemplo.com/usuario')

  // request.onload = function () {
  //   console.log(JSON.parse(this.responseText))
  // }

  // request.onerror = function () {
  //   console.log('erro ao executar a requisição')
  // }

  // request.send()

  // fetch(input: string, {
  //   method?: "GET" | "POST" | "PUT" | "DELETE",
  //   mode?: "navigate" | "same-origin" | "no-cors" | "cors",
  //   headers?: { [ key: string ]: any }
  // }): Promise<Response>
