const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

// Função que carrega o conteúdo da API.
// async function load() {
//     // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
//     const res = await fetch('http://localhost:3000/')
//         .then(data => data.json())
//     // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
//     res.urls.map(({name, url}) => addElement({name, url}))
// }

// load()

async function load(){
    const res = await fetch('http:localhost:3000').then(data => data.json())
    res.urls.map(({name, url}) => addElement({name, url})) 
}

load() 

async function create({name, url}){
    const chave='http://localhost:3000/?name='+name+'&url='+url;
    await fetch(chave)  
}

/* fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())
.then((dt)=>{
    return dt.map(function(item){
        const li = document.createElement('li')
        li.innerHTML = `Nome: ${item.name}, E-mail: ${item.email}` 
        document.querySelector('ul').appendChild(li) 
    })

}) */


function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(el) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    create({name, url})
    addElement({ name, url })

    

    input.value = ''
})

/* 
npm run api 
npm start 

formato:
name,http://devfullstack.com

para inserir
http://localhost:3000/?name=marcos&url=http */