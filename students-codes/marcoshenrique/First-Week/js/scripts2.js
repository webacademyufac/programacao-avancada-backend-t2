/* function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1 = formData.get('n1')
    const n2 = formData.get('n2')
console.log(n1+' '+n2)
} 

const product = {
    productName: 'Camisa',
    price: 29.99, 
    inStock: true,
    size: ['p', 'm', 'g'],
    'main color': 'red'
}

console.log(product.size[product.size.length -1])
console.log(product['price'])
console.log(product['main color'])

// desctructuring - desestruturação

//const { productName, price } = product
//console.log(price)
//price = 30.49 

let { productName, price } = product
console.log(price)
price = 30.49 
console.log(price)
console.log(product.price)

const vector = [3,7,2,45,99]
let [ v1, v2, ...otherVector ] = vector 
console.log(otherVector)

// JSON - JavaScript Object Notation 
// XML é concorrente do JSON 

// criando objto cachorro 

const dog = {
    name: 'Scooby', 
    age: 10

}
console.log(dog)
const dogJson = JSON.stringify(dog) 
console.log(dogJson)
const dogObject = JSON.parse(dogJson)
console.log(dogObject)

const jsonErrado = '{"primeiro":"dado1", "segundo":222,"terceiro":"dado3"}'
const jsonErradoObject = JSON.parse(jsonErrado)
console.log(jsonErrado)  */