function hourDateYear(){
    const date = new Date()
    const hora = date.getHours()
    const minutos = date.getMinutes()
    const segundos = date.getSeconds()
    const formathour = `${hora}:${minutos}:${segundos}`
    console.log(formathour)
}

// setTimeout(hourDateYear, 5000)

// setTimeout(hourDateYear, 5000)

// setTimeout(hourDateYear, 5000)

setInterval(hourDateYear, 5000)
