// Exercise 1
let language = "Javascipt";
let message = `Let's learn ${language} it's fun`;

// Exercise 2 / float number
let floatnumber = 13.41;

// Exercise 3 Big number
let bignumber = 9007199254740992;

// Exercise undefined
let unassigned;

// Exercise typeof
testVariable = false;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);

// Converting data type
let nr1 = 2;
let nr2 = "2";

// console.log(nr1 + Number(nr2));
nr2_number = Number(nr2);
// console.log(typeof nr1 + typeof nr2_number);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr2 = "";
strToNr = Number(strToNr2);
console.log("empty string", strToNr2, typeof strToNr2);