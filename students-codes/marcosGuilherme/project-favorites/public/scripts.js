const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:1200/').then((data) => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({url}) => addElement({url}))
}

load()

// Função que adiciona um elemento no DOM
function addElement({url}) {
    // Criando elementos HTML
    const li = document.createElement('li')
    const a = document.createElement('a')

    // Adicionando o conteúdo do elemento
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    a.innerHTML = url

    const liColor = ul.querySelectorAll('li').length % 2 === 0 ? 'lightblue' : 'lightgreen' // ternário para definir a cor do elemento li (par ou ímpar) 
    li.style.backgroundColor = liColor // adicionando a cor ao elemento li

    // Adicionando o texto ao elemento
    const liText = document.createTextNode(url)

    // Adicionando o elemento filho ao elemento pai


    const button = document.createElement('button') 
    button.appendChild(document.createTextNode('Remover'))  
    button.setAttribute('onclick', `removeElement('${url}')`) // adicionando o atributo onclick ao elemento button e passando a função removeElement como parâmetro 
    button.style.marginLeft = '10px' // adicionando o estilo ao elemento

    // Adicionando os elementos ao DOM

    // li.appendChild(liText) 
    li.appendChild(a) // adicionando o elemento a ao elemento li
    li.appendChild(button) // adicionando o elemento button ao elemento li
    ul.appendChild(li) // adicionando o elemento ao DOM
}



function removeElement(el) {

    // // Pegando o elemento que foi clicado
    // const button = event.target //
    // // button.parentNode.remove() // Forma mais rapida removendo o elemento pai do elemento clicado 

    // // Pegando o elemento pai do elemento clicado
    // const li = button.parentNode

    // // Removendo o elemento pai do elemento clicado
    // ul.removeChild(li)

    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
        fetch('http://localhost:3000?name='+ el.parentNode.querySelector('a').innerHTML + '&url='+ el.parentNode.querySelector('a').href.slice(0, -1) + '&del=1')
    

}

form.addEventListener('submit', (event) => { 
    event.preventDefault(); // previnindo o comportamento padrão do formulário (recarregar a página)
    
    let { value } = input 

    if (!value)
        return alert('Preencha o campo!')

    const [url] = value.split(',') // quebrando a string em um vetor
    // console.log(name, url) // exibindo o vetor

    if (!url) // se não tiver url - exemplo de erro: 'teste,'
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) // testando se a url não começa com http
        return alert('Digite a url da maneira correta.')

    addElement({ name, url }) // adicionando o elemento no DOM

    input.value = '' // limpando o input
})