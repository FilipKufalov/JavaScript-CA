let object = {
    id: 1,
    type: "Ice Cream",
    description: "Milk product"
}

for (const prop in object) {
    // console.log(object[prop]);
    // console.log(object[prop]);
}

let ArrayObject = [];

for (const prop in object) {
    // console.log(object[prop]);
    ArrayObject.push(object[prop]);
    // console.log(prop[object] + prop);
}

console.log(ArrayObject);
