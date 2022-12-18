const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load() {
    const res = await fetch('http://localhost:3000').then(data => data.json())
    res.urls.map(({ name, url }) => addElement({ name, url }))
}

load()

//funcoes para adicionar e deletar elementos no arquivo usando a api
function addElementFile({ name, url }) {
    var url = "http://localhost:3000?" + "name=" + name + "&url=" + url
    fetch(url)
}
function removeElementFile({ name, url }) {
    var url = "http://localhost:3000?" + "name=" + name + "&url=" + url + "&del=true"
    fetch(url)
}
/*
//funcao de criar e deletar o elemento do arquivo com assync (modificada) do @dev-welligtonlins
async function addElementFile({ name, url }) {
    const addUrl = `http://localhost:3000?name=${name}&url=${url}`;
    await fetch(addUrl)
}
async function removeElementFile({ name, url }) {
    const delUrl = `http://localhost:3000?name=${name}&url=${url}&del=true`;
    await fetch(delUrl)
}
*/

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash, { name, url })

    li.append(a)
    li.append(trash)
    ul.append(li)
}
function removeElement(el, { name, url }) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
    removeElementFile({ name, url })
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

    addElementFile({ name, url })
    addElement({ name, url })

    input.value = ''
})
