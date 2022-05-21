let message;
let skip = 2;
console.log(`Continue Loop, Skip Value = ${skip}`);
for (let i = 0; i < 10; i++) {
    if (i === skip) {
        continue;
    }
    console.log(i);
}
console.log(`Break Loop, Skip Value = ${skip}`);
for (let i = 0; i < 10; i++) {
    if (i === skip) {
        break;
    }
    console.log(i);
}