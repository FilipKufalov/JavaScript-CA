let gameSign = ['Rock', 'Paper', 'Scissors'];
let userSignInput = prompt(`Rock, Paper or Scissors?`);
let computerRandom = Math.floor(Math.random() * 3);
let playerChoose;
let ComputerChoose = gameSign[computerRandom];
let message;

switch (userSignInput.toLowerCase()) {
    case 'rock':
        userSignInput = 0;
        playerChoose = gameSign[0];
        break;
    case 'paper':
        userSignInput = 1;
        playerChoose = gameSign[1];
        break;
    case 'scissors':
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