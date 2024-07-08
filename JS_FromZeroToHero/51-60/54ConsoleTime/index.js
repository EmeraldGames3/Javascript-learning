console.log("Start timing...");

// Start the timer named "timer1"
console.time("timer1");

// Perform some operations
for (let i = 0; i < 1000000; i++) {
    // Simulate some computation
    let x = Math.sqrt(i);
}

// End the timer named "timer1" and log the elapsed time
console.timeEnd("timer1");

// Start the timer named "timer2"
console.time("timer2");

// Perform some different operations
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    // Simulate some different computation
    sum += i;
}

// End the timer named "timer2" and log the elapsed time
console.timeEnd("timer2");

console.log("End of timing.");
