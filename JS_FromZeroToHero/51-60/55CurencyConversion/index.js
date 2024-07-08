let number = 123456.789;

// number.toLacale("location", {options});

number = number.toLocaleString("de-DE");

console.log(number);

let number2 = 123456.789;
let formattedNumber = number2.toLocaleString("en-US", { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
});

console.log(formattedNumber); // Output: "$123,456.79"
