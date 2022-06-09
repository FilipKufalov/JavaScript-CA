function sayHello() {
    let you = prompt(`What's your name?`);
    console.log(`Hello, ${you}!`);
}

// sayHello();

let varFunctionAddTwoNumbers = function (a, b) {
    return a + b;
}

// console.log(varFunctionAddTwoNumbers(1, 2));
// console.log(varFunctionAddTwoNumbers(3, 4));

let arrowFunctionAddTwoNumbers = (param1, param2) => console.log(param1 + param2);

// arrowFunctionAddTwoNumbers(1, 2);

let array = [5, 9, 10];
let array2 = [3, 4];

// spread operator
// console.log(...array);
// console.log(...array2);
// console.log(varFunctionAddTwoNumbers(...array));

let resultsArr = [];

for (let i = 0; i < 10; i++) {
    // const element = array[i];
    let result = varFunctionAddTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}

console.log(resultsArr);