document.title = "New Title";

console.log(document);

document.body.style = "background: red;";

const username = "";
const welcomeMsg = document.getElementById("myH1");
welcomeMsg.textContent += username === "" ? "Guest" : username;

console.dir(document);
