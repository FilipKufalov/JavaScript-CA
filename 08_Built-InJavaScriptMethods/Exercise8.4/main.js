let string = "thIs will be capiTalized for each word";

function capitalizedFirstWord(sentence) {
    let newString = sentence.toLowerCase();
    let letters = newString.split(" ");
    let newArr = [];
    letters.forEach(element => {
        let firstWord = element.charAt(0).toUpperCase();
        let restOfWord = element.slice(1);
        newArr.push(firstWord.concat(restOfWord));
        newString = newArr.join(" ");
    });
    return newString;
}

console.log(capitalizedFirstWord(string));