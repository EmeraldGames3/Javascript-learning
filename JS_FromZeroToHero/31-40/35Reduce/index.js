// reduce the elements of an array to a single value
// parameters: accumulator, currentElement

const prices = [5, 60, 10, 25, 15, 20];

// const total = prices.reduce(sum);
const total = prices.reduce((acc, e) => acc + e);
console.log(`${total.toFixed(2)}$`);

function sum(accumulator, element) {
    return accumulator + element;
}

const grades = [75, 50, 90, 100, 80, 65, 95];

const maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}