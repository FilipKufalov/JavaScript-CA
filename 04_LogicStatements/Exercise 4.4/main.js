let randomNumber = Math.random();
randomNumber = randomNumber * 10;
randomNumber = Math.floor(randomNumber);

let responseArray = ["eating", "sitting", "drinking", "running", "sleeping", "riding a bicycle", "climbing", "chilling", "walking", "playing"];

// prompt("Enter a question.");
let message = "I am ";
switch (randomNumber) {
    case 0:
        message = message + responseArray[0];
        break;
    case 1:
        message = message + responseArray[1];
        break;
    case 2:
        message = message + responseArray[2];
        break;
    case 3:
        message = message + responseArray[3];
        break;
    case 4:
        message = message + responseArray[4];
        break;
    case 5:
        message = message + responseArray[5];
        break;
    case 6:
        message = message + responseArray[6];
        break;
    case 7:
        message = message + responseArray[7];
        break;
    case 8:
        message = message + responseArray[8];
        break;
    case 9:
        message = message + responseArray[9];
        break;
    default:
        message = `I don't know what i'm doing`;
        break;
}

console.log(message);
// console.log(RandomNumber);