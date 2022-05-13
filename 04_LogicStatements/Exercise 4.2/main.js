let promptValue = prompt(`What's your age?`);
let age = Number(promptValue);

let message;
if (isNaN(age)) {
    message = "Age is not a number";
} else if (age >= 21) {
    message = "Allowed entry to a venue and the ability to purchase alcohol";
} else if (age >= 19) {
    message = "Allowed entry to a venue but deny the purchase of alcohol";
} else {
    message = "You can not enter";
}

console.log(message);

// if (age >= 21) {
//     console.log(1);
// } else if (age >= 18) {
//     console.log(2);
// } else {
//     console.log(3);
// }
