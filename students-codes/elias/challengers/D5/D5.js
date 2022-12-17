

function data(){
    const date = new Date();
    return console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

// setTimeout(data, 5000)
// setTimeout(data, 5000)
// setTimeout(data, 5000)

setInterval(data, 5000)
setInterval(data, 5000)
setInterval(data, 5000)
