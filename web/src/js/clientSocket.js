var socket = io.connect('http://0.0.0.0:3022', { 'forceNew': true });
socket.on('messages', function(data) {
  console.log(data);
});

