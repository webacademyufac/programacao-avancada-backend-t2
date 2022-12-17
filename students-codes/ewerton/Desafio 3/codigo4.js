//FUNÇÃO ANTES DE TRANSFORMAR EM ARROW FUNCTION
// function(){
//     let x = 7
//     function somarXMais(){
//         return x+5
//     }
//     return somarXMais()
// }

// Função Fora
() => {
  // Função somarXMais5
  (x = 7) => {
    return x + 5
  }
}