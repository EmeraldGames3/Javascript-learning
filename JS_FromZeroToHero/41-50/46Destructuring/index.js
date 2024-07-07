let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

const colors = ['red', 'blue', 'green', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

const [firstColor, secondColor, thirdColor, ...rest] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(rest);

function displayPerson({firstName, lastName, age, job="Unemplyed"}) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

const p1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: 'Fry Cook',
}

const p2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job='Unemployed'} = p2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

displayPerson(p1);
displayPerson(p2);