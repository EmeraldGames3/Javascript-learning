// Args of forEach -> element, index, array itself

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display);
numbers.forEach(double);
numbers.forEach((element, index, array) => array[index] = element / 2);
numbers.forEach((element, index, array) => array[index] = element ** 2);
console.log(...numbers);

function display(element) {
    console.log(element);
}

function double(element, index, array){
    array[index] = element * 2;
}

// numbers.forEach((element) => console.log(element));

let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach((element, index, array) => console.log(element));
fruits.forEach((element, index, array) => array[index] = element.toUpperCase());
console.log(...fruits);