const testArrow = () => ((x=7), ()=>(x+5))  ()
console.log(testArrow())

// outra forma passo a passo da função acima

// const arrayfunc = () => { let x = 7; y = (x) => x+5; return y(x) }
// const arrayfunc = () => { y = (x) => x+5; return y(7) }
// const arrayfunc = () => { return ((x = 7) => x+5)(); }
const arrayfunc = () => ((x = 7) => x+5)()
console.log(arrayfunc())