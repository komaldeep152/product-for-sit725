var express = require("express")
var app = express()

//Initializing Sockets...
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname +'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}))

//Adding sockets...
io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // setInterval(()=>{
  //   socket.emit('number', parseInt(Math.random()*10));
  // }, 2000);

  socket.on('chat:msg', (msg) => {
    console.log("Sending message to broadcast: ",msg);
    socket.broadcast.emit('chat:broadcast', msg);
  });
  
});

var port = process.env.port || 3000;

http.listen(port,() => {
    console.log("App listening to : http://localhost:" +port)
})