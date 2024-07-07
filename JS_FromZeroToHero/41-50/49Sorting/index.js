let numbers = [4, 2, 5, 1, 3];
console.log("Before sorting:", [...numbers]);

numbers.sort((a, b) => a - b);
console.log("After sorting (ascending):", [...numbers]);

numbers.sort((a, b) => b - a);
console.log("After sorting (descending):", [...numbers]);


const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37},
];

// Sort by calories (ascending)
fruits.sort((a, b) => a.calories - b.calories);
console.log("Sorted by calories (ascending):", [...fruits]);

// Sort by calories (descending)
fruits.sort((a, b) => b.calories - a.calories);
console.log("Sorted by calories (descending):", [...fruits]);

// Sort by name (alphabetically)
fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name (alphabetically):", [...fruits]);
