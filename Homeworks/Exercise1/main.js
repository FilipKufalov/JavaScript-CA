const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "";

console.log(`Today is: ${day}`);
if (d.getHours() > 12) {
    console.log(`Current Time is: ${time} PM`);
} else {
    console.log(`Current Time is: ${time} AM`);
}