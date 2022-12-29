const fuctionArrow = () => ( (x = 7) => (x + 5) ) ()
 console.log(fuctionArrow())

const correctArrowFunction = () => ( (x=7), ()=>(x+5) ) ()
console.log(correctArrowFunction())