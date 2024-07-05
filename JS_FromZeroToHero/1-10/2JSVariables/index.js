// let x = 100;
// let y;
// y = 50;

// console.log(x);
// console.log(x + y);

// console.log(age); Error
console.log(price);
// console.log(gpa); Error

let age = 25;
var price = 10.99;
const gpa = 2.1;

// console.log(age);
// console.log(price);
console.log(`You are ${age} years old and have a GPA of ${gpa}`);
console.log(`The price is ${price}`);
// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof gpa);

let firstName = "John";
let lastName = "Doe";

console.log(typeof firstName);
console.log(`You are ${firstName} ${lastName}`);

let online = true;
console.log(typeof online);
console.log(online);

let fullname = "John Doe";
let myAge = 21;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById('p2').textContent = `You are ${myAge} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;