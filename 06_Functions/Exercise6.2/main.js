let Array = ["Smart", "Skillful", "Strong", "Fast"];

function askQuestion() {
    let userAnswer = prompt(`What's your name?`);
    let random = Math.floor(Math.random() * Array.length);
    console.log(`${userAnswer} You are ${Array[random]}!`);
}

askQuestion();

