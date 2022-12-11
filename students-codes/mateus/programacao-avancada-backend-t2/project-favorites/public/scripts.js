const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load() {
    const response = await fetch('http://localhost:3000/').then(data => data.json())
    ul.innerHTML = ''
    response.urls.map((link) => addElement(link))
}

function newLink({ name, url }) {
    fetch(`http://localhost:3000?name=${name}&url=${url}`)
        .then(res => {
            if (res.status == 200)
                alert('Adicionado com sucesso!')
        })
        .catch(error => alert('Erro ao adicionar favorito!'))
    load()
}

load()
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
    ul.children
}

function removeElement(el) {
    const linkElement = el.parentNode.children[0]
    const name = linkElement.innerText, url = linkElement.getAttribute('href')
    console.log({ name, url })
    if (confirm('Tem certeza que deseja deletar?')) {
        // el.parentNode.remove()
        fetch(`http://localhost:3000?name=${name}&url=${url}&del=del`)
        load()
    }

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

    // addElement({ name, url })
    newLink({ name, url })
    input.value = ''
})