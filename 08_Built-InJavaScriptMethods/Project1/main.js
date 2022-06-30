let myString = "MyWord";

function wordScrambler(str = "") {
    let stringLenght = str.length;
    let scarmbledWord = "";
    for (let i = 0; i < stringLenght; i++) {
        let stringIndex = Math.floor(Math.random() * str.length);
        // console.log(stringIndex);
        let stringCharacter = str[stringIndex];
        // console.log(stringCharacter);
        scarmbledWord = scarmbledWord.concat(stringCharacter);
        //  console.log(scarmbledWord);
        str = str.substring(0, stringIndex) + str.substring(stringIndex + 1, stringLenght);
        //  console.log(str);
    }

    return scarmbledWord;
}

console.log(wordScrambler(myString));