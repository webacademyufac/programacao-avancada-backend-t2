let varNum = 10
function out(){
    let varNum = 20
    function sum5(){
        let varNum = 8
        return varNum+5
    }
     return sum5()
}
console.log(out()) //o valor retornado é 8+5 uma vez que o valor 8 encontra-se dentro do escopo da função.