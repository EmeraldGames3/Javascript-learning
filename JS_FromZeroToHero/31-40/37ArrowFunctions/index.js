const hello1 = function(name){
    console.log(`Hello ${name}`);
}

const hello2 = (name) => console.log(`Hello ${name}`);

hello1("Emi");
hello2("Emi");

const hello = (name, age) =>{
    console.log(`You are ${name}`);
    console.log(`You are ${age} years old`);
}

hello("Emi", 14);

// setTimeout(() => console.log("Hello World!") ,3000);
// setInterval(() => console.log("Hello Interval"), 1000);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map(number => Math.pow(number, 2)));
console.log(numbers.filter(number => number % 3 === 0));
console.log(numbers.reduce((accumulator, element) => accumulator + element));