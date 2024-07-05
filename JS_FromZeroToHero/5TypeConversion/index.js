let age = window.prompt(`How old are you?`);
age = Number(age);
age += 1;

document.getElementById("p1").innerHTML = `Your age is ${age}, ${typeof age}`;

console.log(Boolean('1111'));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Boolean(''));