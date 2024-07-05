const PI = 3.14;
let radius;
let circumference;

// pi = 420.69; Error

// radius = prompt("Enter the radius of the circel");
// radius = Number(radius);

// circumference = 2 * radius * PI;

// console.log(circumference);

document.getElementById("mySubmit").onclick = () => {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").innerHTML = `${circumference} cm`
}