const socket = io("ws://localhost:8080");

socket.on("message", text => {
    const el = document.createElement("li");
    el.innerHTML = text;
    document.getElementById("messages").appendChild(el);
})

document.getElementById("button").addEventListener("click", e => {
    e.preventDefault();
    const text = document.getElementById("text").value;
    socket.emit("message", text);
})