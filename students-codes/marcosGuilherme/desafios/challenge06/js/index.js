const lista = document.querySelector("#list-users")
const requistFetch = fetch('http://jsonplaceholder.typicode.com/users').then((response) => {
    // Validação de request
    if(response.ok){
        return response.json()
    }else{
        console.error("Request error ")
    }
    }).then((users) => {
        users.forEach(user => {
            // Validação do nome e Email
            let statusName = true
            let statusEmail = true
            if(user.name == ""){
                statusName = false
            }
            if(user.email == " "){
                statusEmail = false
            }
            // Tratamento da validação de dados
            if (statusName == false & statusEmail == false){
                const item = document.createElement("li")
                const conteudo = lista.appendChild(item)
                conteudo.innerHTML = `Nome: NÃO TEM NOME Email: NÃO TEM EMAIL`
            }else{
                if(statusName == false){
                    const item = document.createElement("li")
                    const conteudo = lista.appendChild(item)
                    conteudo.innerHTML = `Nome: NÃO TEM NOME Email: ${user.email}`
                }else{
                    if(statusEmail == false){
                        const item = document.createElement("li")
                        const conteudo = lista.appendChild(item)
                        conteudo.innerHTML = `Nome: ${user.name} Email: NÃO TEM EMAIL}`
                    }
                }
            }
            const item = document.createElement("li")
            const conteudo = lista.appendChild(item)
            conteudo.innerHTML = `Nome: ${user.name} Email: ${user.email}`
        });
            
    }).catch((error) => {
        console.log(`Algo deu errado: ${error}`)
    })




