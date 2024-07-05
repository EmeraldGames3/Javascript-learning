let userName = " Emid Gamesi       ";

console.log(userName.charAt(2));
console.log(userName.indexOf('e'));
console.log(userName.lastIndexOf('i'));
console.log(userName.length);
console.log(userName.trim())
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat(3));
userName = userName.trim();
console.log(userName.startsWith(" "));
console.log(userName.endsWith('i'));
console.log(userName.includes(' '));

let phoneNumber = "123-456-7890";
console.log(phoneNumber);
console.log(phoneNumber.replaceAll('-', ''));
console.log(phoneNumber.padStart(15, '*'));
console.log(phoneNumber.padEnd(19, '-'))