let a;
let b;
let operator;

function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Error';
    }
}

console.log(calculator(1, 2, '+'));
console.log(calculator(1, 2, '-'));
console.log(calculator(1, 2, '*'));
console.log(calculator(3, 3, "/"));