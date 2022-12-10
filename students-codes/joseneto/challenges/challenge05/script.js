function qualHora() {
    agora = new Date();
    console.log(agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds());
}

setTimeout(qualHora, 5000);
//setTimeout(qualHora, 5000);
setInterval(qualHora, 5000);
setTimeout(qualHora, 5000);