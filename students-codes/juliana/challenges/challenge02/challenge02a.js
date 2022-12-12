const vectorDes2 = [3,7,2,99,52]

const objectDes2 = {
    n1: vectorDes2[1],
    n2: vectorDes2[2],
    n3: vectorDes2[3],
    n4: vectorDes2[4],
    n5: vectorDes2[5]
}

let {n1, n2, n3, n4, n5} = objectDes2

const jsonDes2 = '{"number1":"'+n1+'","number2":"'+n2+'","number3":"'+n3+'","number4":"'+n4+'","number5":"'+n5+'"}'
const testObject = JSON.parse(jsonDes2)
console.log('deu certo veja'+jsonDes2)