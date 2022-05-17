userInputNumber = prompt(`Insert Number from 1 to 100`);
userInputNumber = Number(userInputNumber);
randomNumber = Math.floor(Math.random() * 100);
let message;

if (userInputNumber >= 1 && userInputNumber <= 100 && userInputNumber < randomNumber) {
    message = `Your number ${userInputNumber} is smaller than ${randomNumber}`;
} else if (userInputNumber >= 1 && userInputNumber <= 100 && userInputNumber === randomNumber) {
    message = `Your number ${userInputNumber} is equal to ${randomNumber}`;
} else if (userInputNumber >= 1 && userInputNumber <= 100 && userInputNumber > randomNumber) {
    message = `Your number ${userInputNumber} is greater than ${randomNumber}`;
} else {
    message = `Your number is out of range (1-100)`;
}

alert3(message);