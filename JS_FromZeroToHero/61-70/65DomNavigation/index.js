const elements = document.getElementById("fruits");
const firsChild = elements.firstElementChild;
const lastChild = elements.lastElementChild;

// console.log(elements);
// console.log(firsChild);

firsChild.style.backgroundColor = "yellow";
firsChild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const firsChild = ulElement.firstElementChild;
  const lastChild = ulElement.lastElementChild;
  firsChild.style.color = "green";
  lastChild.style.color = "orange";
});

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "lime";

const element2 = document.getElementById("potatoes");
const prevSibling = element2.previousElementSibling;
prevSibling.style.backgroundColor = "skyblue";

const parent = element.parentElement;
parent.style.backgroundColor = "grey";

const element3 = document.getElementById("deserts");
const children = element3.children;

console.log(children);
Array.from(children).forEach((child) => {
  child.style.fontSize = "2em";
});
