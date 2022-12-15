
function pegarData (){
    const date = new Date(Date.now())
    const day = date.getDay();
    const month = date.getMonth()
    const year = date.getFullYear()
    const hora = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`O dia é ${day} do mes ${month} no ano de ${year}`)
    console.log(`A hora é: ${hora}:${minutes}:${seconds}`);
    // console.log(`a data atual é : ${date}`)
    // console.log(`a hora atual é: ${hora}`)
    // console.log(`os minutos atuais são: ${minutes}`)
    // console.log(`Os segundos atuais sao: ${seconds}`)
}
setTimeout(pegarData, 5000)
setTimeout(pegarData, 5000)
// setInterval(pegarData, 5000)
setTimeout(pegarData, 5000)
console.log("Chameison")