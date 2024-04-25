const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = ({ data }) => {
    console.log('Received:', data);
}

document.querySelector('button').onclick = () => {
    socket.send("Hello!");
}