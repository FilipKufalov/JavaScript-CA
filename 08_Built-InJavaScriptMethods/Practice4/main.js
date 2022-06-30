let time = new Date();
console.log(time);

let now = Date.now();
// console.log(now / 60 / 60 / 24 / 12);

let milliDate = new Date(now + 360 * 1000);
console.log(milliDate);

let specificDate = new Date(2022, 0, 10, 12, 15, 10, 100);
console.log(specificDate);