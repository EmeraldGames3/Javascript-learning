// Creating different Date objects
const dates = [
    new Date(), // Current date and time
    new Date(2024, 0, 1, 2, 3, 4, 5), // 2024-01-01T02:03:04.005
    new Date("2024-01-10"), // 2024-01-10T00:00:00.000
    new Date("2024-01-10T12:00:00Z"), // 2024-01-10T12:00:00.000Z (UTC)
    new Date(0), // 1970-01-01T00:00:00.000Z (Epoch time)
];

// Log the initial dates
dates.forEach((element) => console.log(element));

// Using getters
dates.forEach((element) => {
    console.log(`Year: ${element.getFullYear()}, Month: ${element.getMonth()}, Date: ${element.getDate()}`);
    console.log(`Hours: ${element.getHours()}, Minutes: ${element.getMinutes()}, Seconds: ${element.getSeconds()}, Milliseconds: ${element.getMilliseconds()}`);
    console.log(`Day of the week: ${element.getDay()}`);
    console.log(`Time: ${element.getTime()} (milliseconds since Epoch)`);
});

// Using setters
dates.forEach((element) => {
    element.setFullYear(2025);
    element.setMonth(5); // June
    element.setDate(15);
    element.setHours(10);
    element.setMinutes(30);
    element.setSeconds(45);
    element.setMilliseconds(500);
    console.log(`Updated date: ${element}`);
});

// Comparing dates
const date1 = new Date(2024, 0, 1); // 2024-01-01
const date2 = new Date(2024, 0, 2); // 2024-01-02

console.log(`date1: ${date1}`);
console.log(`date2: ${date2}`);
console.log(`Is date1 earlier than date2? ${date1 < date2}`);
console.log(`Is date1 later than date2? ${date1 > date2}`);
console.log(`Are date1 and date2 equal? ${date1.getTime() === date2.getTime()}`);

// Setters and Getters combined with comparison
const myDate = new Date();
myDate.setFullYear(2024);
myDate.setMonth(0); // January
myDate.setDate(10);
console.log(`myDate: ${myDate}`);
console.log(`Is myDate equal to new Date("2024-01-10")? ${myDate.getTime() === new Date("2024-01-10").getTime()}`);
