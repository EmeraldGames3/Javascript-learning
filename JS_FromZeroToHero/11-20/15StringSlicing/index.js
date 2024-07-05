const fullName = `Emi Plays`;

// let firstName = fullName.slice(0, 3);
let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(4, fullName.length);
// let lastName = fullName.slice(4);
let lastName = fullName.slice(fullName.lastIndexOf(' ') + 1);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar)
console.log(lastChar);

const email = "fake@gamil.com"
let username = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);
console.log(username);
console.log(extension);