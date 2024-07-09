let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "gold";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "skyblue";
  });
});

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.append(newButton);

buttons = document.querySelectorAll(".myButtons");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
  });
});
