const vetor1 = [1,2,3,4,5]
console.log(vetor1)

const vectorObj = {
    n1: vetor1[0],
    n2: vetor1[1],
    n3: vetor1[2],
    n4: vetor1[3],
    n5: vetor1[4]
}
console.log(vectorObj)

let { n1, n2, n3, n4, n5 } = vectorObj
console.log(n3)

const vectorObj2 = {
    v1: n1,
    v2: n2,
    v3: n3,
    v4: n4,
    v5: n5
}
console.log(vectorObj2)
vectorObj2String = JSON.stringify(vectorObj2);

console.log(vectorObj2String)