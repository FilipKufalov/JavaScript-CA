let myTable = [];
let TableRows = 2;
let TableColumns = 4;
let counter = 0;

for (let i = 0; i <= TableRows; i++) {
    myTable.push([]);
    for (let j = 0; j <= TableColumns; j++) {
        myTable[i].push(`Row ${i} Column ${j}`);
    }
}

console.table(myTable);
