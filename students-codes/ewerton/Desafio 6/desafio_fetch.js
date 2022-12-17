//OBTENDO ELEMENTO UL
let list = document.querySelector('ul')

// REQUISIÇÃO COM FETCH
fetch("http://jsonplaceholder.typicode.com/users")

//recenbendo dados do fetch e transformando em Json
  .then((lista) => lista.json())
  .then((users) => {

    //PERCORRENDO DADOS DO JSON
    users.forEach((user) => {

      //CRIANDO ELEMENTOS LI e BR 
      const list_item_name = document.createElement('li')
      const list_item_email = document.createElement('li')
      const br = document.createElement('br')

      //ATRIBUINDO CONTEÚDO HTML PARA OS ELEMENTOS LI
      list_item_name.innerHTML = `Nome: ${user.name} `
      list_item_email.innerHTML = `Email: ${user.email} `

      //ADICIONANDO ELEMENTO LI(OS ITENS) A LISTA UL(QUE É A LISTA NÃO ORDENADA)
      list.appendChild(list_item_name)
      list.appendChild(list_item_email)
      list.appendChild(br)
      
    })
    //TRATAMENTO DE ERRO PARA FALHA REQUISIÇÕES DE USUÁRIOS
  }).catch((error)=>alert(`Erro encontrado: ${error}`))
