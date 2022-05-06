console.log(`test`)

let nr1 = 10;
let nr2 = 4;

let result1 = nr1 * nr2;
console.log(`${nr1} * ${nr2} = ${result1}`)
// console.log("" + nr1 * nr2)

let nr3 = 4;
let nr4 = 5;
let nr5 = 2;
let result = nr3++ + ++nr4 * nr5++;
console.log(`${--nr3} + ${nr4} * ${--nr5} = ${result}`)