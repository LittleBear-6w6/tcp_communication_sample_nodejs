const net = require('net');

const sever = net.createServer(socket =>{
    socket.on('data', data => {
        console.log(data + ' from ' + socket.remoteAddress + ":" + socket.remotePort);
        socket.write('Echo: ' + data);
    });
    socket.on('close', () =>{
        console.log('Client closed connection');
    });
}).listen(3000);

console.log('Listening port is 3000');