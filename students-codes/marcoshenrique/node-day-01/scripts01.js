//utilizando programação síncrona 

/* function sum(){
    const result = 1+1  
    if(result === 2){
        success()
    }else{
        erro()
    }
}

function sucess(){
    console.log('Sucesso! A soma é 2.')
}

function erro(){
    console.log('A soma não é 2. Alguma coisa deu errado...')
}

sum()
console.log('testando exibição console.log.........') */


// transformando em callback. O mesmo código acima agora é uma callback.
//voce passa parametros de cordo com as funções que serão processadas. Depois chama elas. 
/* 

function sum(callback, callbackError){
    const result = 1+1  
    if(result === 2){
        callback()
    }else{
        callbackError()
    }
}


console.log('testando exibição console.log.........') 
sum(
    () => (console.log('Sucesso a soma é 2.')),
    () => (console.log('A soma não é 2. Alguma coisa deu errado'))
) 
 */


//promises - é uma classe; a tradução significa promessa. 

/* const promise = new Promise((resolve,reject) => {
    const result = 1+1  
    if(result === 2){
        resolve('Sucesso a soma é 2.')
    }else{
        reject('A soma não é 2. Alguma coisa deu errado.')
    }
})
promise.then(
    (resultado) => (console.log(resultado)),
    (erro) => (console.log(erro))) */

//promise.catch((resultado) => (console.log(resultado)))
//o catch poderia ser o reject. Mas foi preferível usar outra variável chamada erro dentro da then(). 




// callback para teste com string 
/* const name =   'Paulo Sampaio'

function whoIsTheBest(callback, callbackErro){
    if (name != 'Paulo Sampaio'){
        callbackError('Tá errado. Não tem como!')
    }else{
    callback(`${name} é o Melhor`)
    }
}  

whoIsTheBest(
    ((success)=>(console.log(success))),
    ((erro)=>(console.log(erro)))
)  */

/* const name =   'Paulo Sampaio'

function whoIsTheBest(callback, callbackErro){
    if (name != 'Paulo Sampaio'){
        callbackError('Tá errado. Não tem como!')
    }else{
    callback({
        name: name,
        message: `humildemente o melhor`, 


    })
    }
}  

whoIsTheBest(
    ((success)=>(console.log(`${success.name} é ${success.message}.`))),
    ((erro)=>(console.log(erro)))
)  */


/* const promise = new Promise((resolve,reject)=>{
    const name = 'Paulo Sampaio'
    if (name != 'Paulo Sampaio'){
        reject('Tá errado. Não tem como!')
    }else{
        resolve({
        name: name,
        message: `humildemente o melhor` 
    })
    }
}

promise.then(
    (resolvido)=>(console.log(`${resolvido.name}, ${resolvido.message}`))), 
    (errado)=>(console.log(errado)))  */