let array = [];

for (let i = 1; i <= 10; i++) {
    array.push(i);
}

// console.log(array);

for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

for (const number of array) {
    // console.log(number);
}

array.forEach(element => {
    element = `${element} Number`;
    console.log(element);
});