const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const myFruits = document.getElementsByClassName("fruits");
console.log(myFruits);
myFruits[0].style.backgroundColor = "red";

for (let fruit of myFruits) {
  fruit.style.backgroundColor = "yellow";
}

Array.from(myFruits).forEach((fruit) => {
  fruit.style.color = "red";
});

// console.log(myFruits);

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);

for (let e of h4Elements) {
  e.style.backgroundColor = "yellow";
}

Array.from(h4Elements).forEach((e) => {
  e.style.color = "red";
});

Array.from(liElements).forEach((e) => {
  e.style.backgroundColor = "lightgreen";
});

const element = document.querySelector(".fruits");

element.textContent = "New Fruit just Dropped";

const fruits = document.querySelectorAll(".fruits");

fruits.forEach((fruis) => (fruis.style.backgroundColor = "green"));
