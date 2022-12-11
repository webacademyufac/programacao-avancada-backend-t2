const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load(){
    const res = await fetch('http://localhost:3000').then(data => data.json())
    res.urls.map(({name,url}) => addElement({name,url}))
}

load()

async function addElement({ name, url }) {
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

async function removeElement(el) {
    if (confirm('Tem certeza que deseja deletar?')) {
        let item = el.parentNode.querySelector("a")
        let url = item.href
        if(url.slice(-1) === '/')
            url = url.substring(0, url.length - 1)
        await fetch(`http://localhost:3000/?del=1&name=${item.innerText}&url=${url}`)
        el.parentNode.remove()
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })
    await fetch(`http://localhost:3000/?name=${name}&url=${url}`)
    input.value = ''
})