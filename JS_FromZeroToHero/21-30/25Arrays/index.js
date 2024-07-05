let fruits = ["apple", "orange"];

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[3]);
console.log(fruits.length);
fruits.length = 4;
console.log(fruits);

fruits.push("ss");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

console.log(fruits.indexOf("apple"));

fruits.sort().reverse();