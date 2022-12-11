/*RESPOSTA 1:*/
const vectorChallenge = [5, 4, 3, 2, -1]
const objectChallenge = {
    n1: vectorChallenge[0],
    n2: vectorChallenge[1],
    n3: vectorChallenge[2],
    n4: vectorChallenge[3],
    n5: vectorChallenge[4],
}
const { n1, n2, n3, n4, n5 } = objectChallenge

console.log(JSON.stringify({ n1, n2, n3, n4, n5 }))

/*RESPOSTA 2:*/
const num1 = 1
const num2 = -2
const calc = {
    soma: num1 + num2,
    sub: num1 - num2,
    mult: num1 * num2,
    div: num1 / num2
}

console.log(JSON.stringify(calc))
