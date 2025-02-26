let score="33"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof(valueInNumber));

let score1 = null
console.log(typeof score1);  // Outputs: string
console.log(typeof(score1)); // Outputs: string

let valueInNumber1 = Number(score1)
console.log(valueInNumber1); // Outputs: NaN
console.log(typeof(valueInNumber1)); // Outputs: number

let val=0
let convbool =Boolean(val)
console.log(convbool);
console.log(typeof convbool);
