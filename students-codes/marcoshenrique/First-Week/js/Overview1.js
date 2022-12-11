/* //Overview de Javascript 

//console
console.log('texto')
console.error('Esse é um erro.............')
console.warn('Isso é um alerta.')


// variaveis 
const s = 'Marcos'
console.log(s) 
console.log(typeof s)

let x = 20
if(true){
    let y = 20
    console.log(x)
}

let n = 10
console.log(n) 
console.log(typeof n)

n = 15.99
console.log(n) 
console.log(typeof n) 

//boolean 
const isOpen = 1 
console.log(isOpen)
console.log(typeof isOpen)

//null
const a = null 
console.log(a)
console.log(typeof a)

// undefined 
//const nada 
let nada
console.log(nada)
console.log(typeof nada)

// array
let linguagens = ['C++', 50, 'Python', 'JS', ]
console.log(linguagens[1])
console.log(typeof linguagens[1])

// object literals 
const user = {
    username:'vrc', 
    password:'123', 
    idade:31, 
    name:'Victor'
}
console.log(user) 
console.log(typeof user)

// métodos de string
const text = 'qualquer um'
console.log(text.length)

//quebrar texto em um conjunto de caracteres 
const textToArray = text.split('quer')
console.log(textToArray[1])
console.log(text.toLocaleUpperCase())

//procurar algo dentro de uma string 
console.log(text.indexOf('um'))
console.log(text.charAt(text.length -1)) 
console.log(text.charAt(0)) 
console.log(text.slice(2,4))

//mais sobre arrays
const chars = ['AAA', 'B', 'C', 'D ', 88]
console.log(chars.length) 
console.log(chars[chars.length -1]) 
chars[5] = 'F' 
console.log(chars)
chars.pop()
chars.pop()
chars.pop()
chars.pop()
chars.pop()
chars.unshift('B')
//chars.shift('B')// remove
console.log(chars)
 */