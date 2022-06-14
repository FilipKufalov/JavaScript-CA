let arr = ["grapefruit", 4, "hello", 5.6, true];

function printStuff(element, index) {
    console.log(`Print stuff: ${element} on array position ${index}`);
}

function checkString(element) {
    return typeof element === "string";
}

// arr.forEach(printStuff);
console.log(arr.filter(checkString));
// let arrfilter = ["squirrel",]

