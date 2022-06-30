let myDate = new Date();
myDate.setFullYear(2321);
console.log(myDate);

let monthArray = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

let date = myDate.getDate();
let year = myDate.getFullYear();
let month = myDate.getMonth();
let monthName = monthArray[month];
console.log(`${date} - ${monthName} - ${year}`);