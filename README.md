# tcp_communication_sample_nodejs

Sample of TCP communication using Node.js

# SimpleExample

This Directoy inclues client application and server application.  
The client application connects server application by TCP protocol.  
The client application sends simple message to server application.  
The server application adds letters 'Received' to beginning of the message from client and returns the echo message.

## SET UP

1. Execute sever appliction

```bash:Execute server appliction
$ cd simpleExample/server
$ node app.js

Listening port is 3000
```

2. Execute client appliction

```bash:Execute server appliction
$ cd simpleExample/client
$ node app.js
```

## Executin result

These app outputs logs on terminal.

**Sever terminal**

```bash:Server terminal
$ node app.js
Listening port is 3000
Hello Server! from ::1:{$YOUR PORT}
second from ::1:{$YOUR PORT}
Client closed connection
```

**Client terminal**

```bash:Server terminal
$ node app.js
connected to server
Received: Echo: Hello Server!
continue
Received: Echo: second
break
Connection is closed
```
