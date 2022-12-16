const testArrow = () => ((x=7), ()=>(x+5))  ()
console.log(testArrow())