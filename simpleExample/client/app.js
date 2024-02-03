const { write } = require('fs');
const net = require('net');

let i = 0;

const client = net.connect('3000', 'localhost', ()=>{
    console.log('connected to server');
    client.write('Hello Server!');
    i++
});

client.on('data', data => {
    console.log('Received: ' + data)

    if(~data.indexOf("!")){
        console.log("continue")
        sendMessage(data)
    }else{
        console.log("break")
        client.end()
    }
    
});

function sendMessage(data) {
    switch(i){
        case 1:
            client.write("second")
            i++
            break;
        case 2:
            client.write("See you")
            i++
            break;
        default:
            client.end()
    }
    return 0
}


client.on('end', () =>{
    client.destroy();
});

client.on('close', () => {
    console.log('Connection is closed')
});
