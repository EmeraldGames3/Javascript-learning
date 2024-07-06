// function hello() {
//     console.log("Hello");
// }

const hello = function() {
    console.log("Hello");
}

// hello();

// setTimeout(callback, Time in milis)

// setTimeout(function() {
//     console.log("Hello")
// }, 3000);

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
})
const sum = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(squares);
console.log(cubes);
console.log(evenNumbers);
console.log(sum);
