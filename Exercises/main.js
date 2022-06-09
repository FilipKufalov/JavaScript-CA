// Write function that takes one parameter and write it to the console
function oneParamConsoleLog(param) {
    console.log(param);
}

// oneParamConsoleLog("Hello World");
// oneParamConsoleLog(1);
// oneParamConsoleLog(true);

// Exercise 2:
function twoParamaters(param, param2) {
    if (typeof param === "number" && typeof param2 === "number") {
        console.log(`Result for ${param} and ${param2} is ${param * param2}`);
    } else {
        console.log(`${param} or ${param2} is not number`);
    }
}

// twoParamaters(4, 5);
// twoParamaters(1, "2");
// twoParamaters("Hello", true);

// Exercise 3:
function checkNumber(param) {
    if (param % 2 === 0) {
        console.log(`${param} is even`);
    } else {
        console.log(`${param} is odd`);
    }
}

// checkNumber(4);
// checkNumber(5);
// checkNumber(6);

// Exercise 4:
let checkNumberArrow = param => { param % 2 === 0 ? console.log(`${param} is even`) : console.log(`${param} is odd`) };

// checkNumberArrow(4);
// checkNumberArrow(3);
// checkNumberArrow(9);

// Exercise 5:
function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    word === reversedWord ? console.log(`${word} is Palindrome`) : console.log(`${word} is not Palindrome`);
}

// isPalindrome("test")

// Exercise 6:
let isPalindromeArrow = word => { let reversedWord = word.split("").reverse().join(""); word === reversedWord ? console.log(`${word} is Palindrome`) : console.log(`${word} is not Palindrome`); }

isPalindromeArrow("madam");