let timeMinute = 360;

function fromMinutesToHours(param) {
    let result = param / 60;
    return result;
}

// console.log(fromMinutesToHours(timeMinute));
timeMinute = 390;
// console.log(Math.ceil(fromMinutesToHours(timeMinute)));

let arrOfCountries = ["Australia", "Germany", "United States of America"];

function getresc(num) {

    if (num > 0) {
        console.log(num);
        getresc(--num);
        console.log(num);

    }
}

getresc(3);