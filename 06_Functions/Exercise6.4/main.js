let nameOfArray = [];
let sum = (param, param2) => param + param2;

for (let i = 0; i < 10; i++) {
    let calc = sum(i * 5, i * i)
    nameOfArray.push(calc)
}

// function sum(param, param2) {
//     return param + param2;
// }


console.log(nameOfArray);