let arr = ["test", 5, true];
console.log(arr);
console.log(`${arr[0]} = ${typeof arr[0]}`);
console.log(`${arr[1]} = ${typeof arr[1]}`);
console.log(`${arr[2]} = ${typeof arr[2]}`);

// let arr2 = new Array(10)
// console.log(arr2)

let colors = ["black","orange","red"];
let boolean = [true, false, false, true];
let empty = [];

console.log("The lenght of the colors array is: " + colors.length);
console.log("The lenght of the boolean array is: " + boolean.length);
console.log("The lenght of the empty array is: " + empty.length);

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

let arr10 = [0,1,2,3,4,5,6,7,8,9];

console.log("-----------------------");
console.log(arr10[arr10.length - 1]);

let favouriteFruits = ["grapefruit", "orange", "lemon"];
console.log(favouriteFruits);
favouriteFruits.push("mandarin");
console.log(favouriteFruits);
let test2 = favouriteFruits.push("lime");
console.log(test2);
console.log(favouriteFruits);

console.log("-----------------------");
favouriteFruits.splice(2,0, "fruite1", "fruit2");
console.log(favouriteFruits);
console.log("-----------------------");

let arr5 = [10,11,12,13,14];
let arr15 = arr10.concat(arr5);
console.log(arr15);
arr15.pop();
console.log(arr15);
arr15.shift();
console.log(arr15);