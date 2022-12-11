

function getTimeString() {
   let date = new Date()
   console.log(`Hora certa: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}}`)
}
console.log("Executando")
setTimeout(getTimeString, 5000)
setTimeout(getTimeString, 5000)
setTimeout(getTimeString, 5000)
setInterval(getTimeString, 5000)

