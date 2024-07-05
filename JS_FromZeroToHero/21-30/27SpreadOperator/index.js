let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);

console.log(numbers);
console.log(...numbers);
console.log(max);

let username = "Name";
let letters = [...username].join('*');

console.log(letters);

let fruits = ["apple", "orange"];
let vegetables = ["carrots", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);