// let userInput = prompt(`Select Number from 0 to 10`);
// let numberUserInput = Number(userInput)
// let prize;
// let message;
// message = `My Selection ${numberUserInput}`;
// console.log(message);

let betAmount = document.getElementById(`bet`);
let messagePrize = document.getElementById(`message`);
let dollars;
let tokens;
let credits;

function Betting() {
    if (betAmount.value >= 1 && betAmount.value <= 10) {
        switchCase();
    } else {
        messagePrize.innerText = `You must bet amount between 1-10$`;
    }
}

function switchCase() {
    let randomNumber = Math.floor(Math.random() * 10);
    // dollars = document.getElementById(`dollars`);
    // tokens = document.getElementById(`tokens`);
    // credits = document.getElementById(`credits`);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            messagePrize.innerText = `Reward: 0$`;
            break;
        case 1:
            messagePrize.innerText = `Reward: 0.5$`;
            break;
        case 2:
        case 3:
            messagePrize.innerText = `Reward: 0.1 Token`;
            break;
        case 4:
            messagePrize.innerText = `Reward: JavaScript Course`;
            break;
        case 5:
            messagePrize.innerText = `Reward: 1.1$`;
            break;
        case 6:
            messagePrize.innerText = `Reward: 1.1 Credits`;
            break;
        case 7:
            messagePrize.innerText = `Reward: 0.2 Tokens`;
            break;
        case 8:
            messagePrize.innerText = `Reward: Nothing`;
            break;
        case 9:
        case 10:
            messagePrize.innerText = `Reward: 0.2$`;
            break;
        default:
            prize = `You are out of range`;
            break;
    }
}