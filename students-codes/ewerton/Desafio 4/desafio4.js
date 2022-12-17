let num = 10
function out(){
    let num = 20
    function sum5(){
        let num = 8
        return num+5
    }
     return sum5()
}
console.log(out()) //o valor retornado é 8+5 uma vez que o valor 8
// encontra-se dentro do corpo da função.