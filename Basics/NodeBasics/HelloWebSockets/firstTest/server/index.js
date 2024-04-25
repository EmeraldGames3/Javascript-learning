const WebSocker = require('ws');
const server = new WebSocker.Server({ port: 8080 });

server.on('connection', socket => {

    socket.on('message', message => {
        console.log('Received:', message);
        socket.send(`Echo: ${message}`);
    });

});