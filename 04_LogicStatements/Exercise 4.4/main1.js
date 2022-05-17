let userInput = prompt("Ask a question");

let questionArray = ["doing", "going", "coding", "there"];

let userInputArray = userInput.split(" ");

let index = null;

userInputArray.forEach(word => {

    if (questionArray.indexOf(word) !== -1)
        index = questionArray.indexOf(word);
});

let message;

if (index !== null) {
    switch (questionArray[index]) {
        case "doing":
            message = "I am eating";
            break;
        case "going":
            message = "I am going far";
            break;
        case "there":
            message = "No";
            break;
        case "coding":
            message = "Yes I know";
            break;
        default:
            message = "I dont understand the question.";
    }
}

console.log(userInput);
console.log(message);