let age = 21;
let message = age > 18 ? `You are an adult` : `You are a child`;

console.log(message);

let time = 16;
let greeting = time < 12 ? `Good mornig` : `Good afternoon`;
console.log(greeting);

let isStudent = true;
let message2 = isStudent ? `You are a student` : `You are not a student`;
console.log(message);

let purchase = 100;
let discount = purchase >= 100 ? 25 : 0;
console.log(`Final price: ${purchase - purchase * (discount / 100)} $`);