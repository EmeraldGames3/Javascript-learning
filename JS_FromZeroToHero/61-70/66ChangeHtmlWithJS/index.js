const newH1 = document.createElement("h1");
newH1.textContent = "I like Pizza";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box2").append(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);

document.body.removeChild(newH1);

const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
// document.getElementById("fruits").append(newListItem);
// document
//   .getElementById("fruits")
//   .insertBefore(newListItem, document.getElementById("orange"));
document
  .getElementById("fruits")
  .insertBefore(newListItem, document.querySelectorAll("#fruits li")[2]);
