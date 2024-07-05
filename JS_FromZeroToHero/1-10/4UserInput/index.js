let username;

username = window.prompt("What's yout username");

document.getElementById('p1').textContent = username;

document.getElementById("mySubmit").onclick = () => {
    let username2 = document.getElementById("myText").value;
    document.getElementById('p2').textContent = username2;
};