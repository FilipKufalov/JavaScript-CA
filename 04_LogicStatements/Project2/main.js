let userInput = prompt(`Type first name of person you know`);
let message;

switch (userInput) {
    case 'boban':
    case 'bobi':
    case 'Boban':
    case 'Bobi':
        message = `Mentor`
        break;
    case 'Ljupco':
    case 'ljupco':
        message = `Colleague`
        break;
    default:
        message = `I don't know him`
        break;
}

console.log(message);