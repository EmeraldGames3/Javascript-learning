// Map returns a new array, for each changes the array itself

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(number => Math.pow(number, 2));
console.log(...squares);

const students = ["shrek", 'spongebob', 'mittens', 'glitterhoof'];
const studentsUpper = students.map(s => s.toUpperCase());

console.log(studentsUpper);

const dates = ["2022-1-10", '2223-2-30', `2025-4-1`];

console.log(dates.map(formatDates));

function formatDates(element) {
    const parts = element.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}