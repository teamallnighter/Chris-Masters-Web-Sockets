const http = require('http');
// 3rd party module, ws!
const websocket = require('ws');
// Basic http server 
const server = http.createServer((req, res)=>{
    res.end("I am connected!")
});
//Setting up the websocketServer server is the object if http shows up on the server. We hand it the websocket sever. 
const wss = new websocket.Server({server})
// console log the headers 
wss.on('headers',(headers,req)=>{
    console.log(headers)
});
// the connection
wss.on('connection', (ws,req)=>{
    ws.send('Welcome to the websocket server!!')
    ws.on('message',(msg)=>{
        console.log(msg)
    })
})

// Set the port 
server.listen(8000);