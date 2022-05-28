let today = new Date();
let xmas = new Date(today.getFullYear(), 11, 25);

let result = xmas.getTime() - today.getTime();
result = Math.floor(result / (1000 * 3600 * 24));

console.log(`${result} days left until Christmas!`);
