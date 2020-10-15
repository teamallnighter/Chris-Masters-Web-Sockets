# Chris Masters Web Sockets

[Socket.io](https://socket.io/)

[Docs](https://socket.io/docs/)

[Get Started](https://socket.io/get-started/chat/)

[Demos](https://socket.io/demos/chat/)

[Github](https://github.com/socketio/socket.io)

## House Keeping

[House Keeping](https://github.com/teamallnighter/Chris-Masters-Web-Sockets/tree/main/housekeeping)

## TCP/UDP

__The cloud is just a bunch of computer somewhere else__

[Understanding TCP](https://searchnetworking.techtarget.com/tutorial/Understanding-TCP-IP#:~:text=TCP%2FIP%20is%20a%20two,packets%20into%20the%20original%20message.)

[Networking 101](https://www.enterprisenetworkingplanet.com/netsp/article.php/3593936/Networking-101--Understanding-TCP-the-Protocol.htm)

### What is a packet

1. Application Layer
2. Transport Layer
3. Network Layer
4. Link Layer
5. Physical Layer

#### Phycial Layer

Cables ect

#### Link Layers

Wifi / Ethernet

#### Network Layer

IP/ISP

#### Transport Layer

UDP/TCP
TCP/IP

Creates 2 (to the power of 16) ports on the cpu (around 65,000)

For example localhost:3000 

IE: Hotel, Too find a guest you need the room number 

[What is the transport layer](https://www.techopedia.com/definition/9760/transport-layer#:~:text=The%20transport%20layer%20is%20the,protocols%20and%20other%20network%20components.)

[Transport Layer Intro](https://www.youtube.com/watch?v=MmK8Ra8J_1o)


#### Application Layer

We work here as devs.
HTTP
FTP
HTTPS
SSH
SMTP

## What is a socket?

[network sockets](https://en.wikipedia.org/wiki/Network_socket)

[What is a socket (oracle)](https://docs.oracle.com/javase/tutorial/networking/sockets/definition.html)

## Websockets VS HTTP

Sockets are native to JS

### The Client

* HTML, JS and CSS
* Uses Websockets API
* Connects to a server from the browser 

### The Server 

* Node 
* Websocket API


__Web sockets has two proccess' at any given time and they do not know about each other__

Install NPM

```bash
npm init 
````

```bash
npm install ws --save
```

## The WebSocket API

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

[MDN: Socket Objet](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

[WS NPM Module](https://www.npmjs.com/package/ws)

Package.json

```json
{
  "name": "nativews",
  "version": "1.0.0",
  "description": "",
  "main": "justWsServer.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ws": "^6.1.0"
  }
}
```

The Client

```html
<script>

    let ws = new WebSocket('ws://localhost:8000');
    console.log(ws);

    ws.onopen = (event)=>{
        ws.send('I am so excited I am connected! It is like Christmas!');
    }

    ws.onmessage = (event)=>{
        console.log(event);
    }

</script>
```

The Server

```javascript
const http = require('http');
// 3rd party module, ws!
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end("I am connected!")
});

const wss = new websocket.Server({server})
wss.on('headers',(headers,req)=>{
    console.log(headers)
});

wss.on('connection', (ws,req)=>{
    ws.send('Welcome to the websocket server!!')
    ws.on('message',(msg)=>{
        console.log(msg)
    })
})


server.listen(8000);
```

__note that we are using ws:// not http://__

## [101 status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 

> This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.
