let tableArray = [];
let numberOfMultiplication = 7;

for (let i = 1; i <= numberOfMultiplication; i++) {
    let tempArray = [];
    for (let j = 1; j <= numberOfMultiplication; j++) {
        result = i * j;
        tempArray.push(`${i} * ${j} = ${result}`);
    }
    if (tempArray.length <= 1) {
        break;
    }
    tableArray.push(tempArray);
}

console.table(tableArray);