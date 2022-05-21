let tableArray = [];
let numberOfMultiplication = 60;

for (let i = 1; i <= numberOfMultiplication; i++) {
    let tempArray = [];
    for (let j = 1; j <= numberOfMultiplication; j++) {
        if (i !== 0 || j !== 0) {
            tempArray.push(i * j);
        } else {
            continue;
        }

    }
    if (tempArray.length < 2) {
        break;
    }
    tableArray.push(tempArray);
}

console.table(tableArray);

