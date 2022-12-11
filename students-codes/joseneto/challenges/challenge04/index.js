import { valor, soma10Estatico } from './geral.js';

window.teste = function() {
    alert(soma10Estatico(valor));
}

window.onload = function() { 
    let btn = document.getElementById("btn");    
    btn.addEventListener('click', () => {
        alert(soma10Estatico(valor));
    });
};