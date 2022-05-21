let startingCounter = 0;
let step = 13;
let i = 0;

// Do While
do {
    startingCounter += step;
    console.log(`[${++i}] ${startingCounter}`);
} while (startingCounter <= 100);

// While
while (startingCounter < 100) {
    startingCounter += step;
    console.log(`[${++i}] ${startingCounter}`);
}