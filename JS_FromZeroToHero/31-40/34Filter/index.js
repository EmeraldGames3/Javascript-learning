// Creates a new array, like map

let numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(...(numbers.filter(element => element % 2 === 0)));
console.log(...numbers.filter(element => element % 2 === 0));

const ages = [16, 17, 18, 18, 19, 20, 60];

console.log(ages.filter(element => element >= 18));

const words = ["apple", "orange", "banana", "kiwi", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords);
console.log(longWords);

function getShortWords(element) {
    return element.length <= 6;
}

function getLongWords(element) {
    return element.length > 6;
}