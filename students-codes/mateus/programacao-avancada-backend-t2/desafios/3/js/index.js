//desafio 3
/*
Desafio: Transforme a função a seguir em uma arrow function.

function out(){
    let x = 7
    function sumXand5(){
        return x+5
    }
    return sumXand5()
}
*/
const fora = () => (x) => x + 5
console.log(fora()(7))