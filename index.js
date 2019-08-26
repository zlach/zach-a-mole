var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('http://localhost:3000/client/public'));

io.on('connection', function(socket) {
  console.log('a user connected');
});

http.listen(5000, function() {
  console.log('listening on port 5000...');
});
