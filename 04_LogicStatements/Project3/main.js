let gameSign = ['Rock', 'Paper', 'Scissors'];
let userSignInput = prompt(`Rock, Paper or Scissors?`);
let computerRandom = Math.floor(Math.random() * 3);
let playerChoose;
let ComputerChoose;
let message;

if (computerRandom === 0) {
    ComputerChoose = gameSign[0]
} else if (computerRandom === 1) {
    ComputerChoose = gameSign[1]
} else if (computerRandom === 2) {
    ComputerChoose = gameSign[2]
}

switch (userSignInput) {
    case 'Rock':
    case 'rock':
    case 0:
        userSignInput = 0;
        playerChoose = gameSign[0];
        break;
    case 'Paper':
    case 'paper':
    case 1:
        userSignInput = 1;
        playerChoose = gameSign[1];
        break;
    case 'Scissors':
    case 'scissors':
    case 2:
        userSignInput = 2;
        playerChoose = gameSign[2];
        break;
    default:
        break;
}

if (userSignInput === 0 && computerRandom === 1) {
    message = `You lose!`;
} else if (userSignInput === 1 && computerRandom === 2) {
    message = `You lose!`;
} else if (userSignInput === 2 && computerRandom === 0) {
    message = `You lose!`;
} else if (userSignInput === 0 && computerRandom === 2) {
    message = `You win!`;
} else if (userSignInput === 1 && computerRandom === 0) {
    message = `You win!`;
} else if (userSignInput === 2 && computerRandom === 1) {
    message = `You win!`;
} else {
    message = `Draw!`;
}

console.log(`Player choose: ${playerChoose}`);
console.log(`Computer choose: ${ComputerChoose}`);
console.log(message);