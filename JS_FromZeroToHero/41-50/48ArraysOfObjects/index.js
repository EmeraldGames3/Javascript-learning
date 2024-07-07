const fruits = [
    {name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37},
]

console.log([...fruits]);

fruits.push({name: "grapes", color: "purple", calories: 69});

console.log([...fruits]);
