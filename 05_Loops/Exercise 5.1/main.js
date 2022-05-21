let maxValue = 10;
let randomNumber = Math.floor(Math.random() * (maxValue + 1))
let correctAnswer = false;

// alert(randomNumber);
while (!correctAnswer) {
    let userNumber = prompt(`Enter number between 0-${maxValue}`);
    userNumber = Number(userNumber);

    if (userNumber === randomNumber) {
        alert(`You guessed the number! Answer: ${randomNumber}`);
        correctAnswer = true;
    } else if (userNumber < randomNumber) {
        alert(`Your guess is lower than right number, Try Again!`);
    } else {
        alert(`Your guess is higher than right number, Try Again!`);
    }

}
