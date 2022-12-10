const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

const first_access = 1

async function load() {
    const res = await fetch('http://localhost:3000')
      .then(data => data.json())
      //.then(data => console.log(data))
    
    res.urls.map(({name,url}) => {
        addElement({name,url})
    })
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
}

function addItemToFile({name, url}) {
    var url = new URL("http://localhost:3000?"+"name="+name+"&url="+url)
    fetch(url).then(console.log('ok'))
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

    addItemToFile({ name,url })
    addElement({ name, url })

    input.value = ''
})