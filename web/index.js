const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var server = require('http').Server(app);
var request=require('request');

var io = require('socket.io')(server);
const path = require('path');
app.use(express.static('src'));
app.use (bodyParser.json ()); 
app.use (bodyParser.urlencoded ({extended: true}));
const conexion = require("./src/js/conexiondb")
// Coloca aquí tus credenciales



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/src/template/index.html'));
});

server.listen(3000,'0.0.0.0', function() {
	console.log('Servidor corriendo en http://localhost:3000');
});


io.on('connection', function(socket) {
    socket.on('get-users',async function(data){
        console.log('Conexion a la base de datos');
        try {
            const resultados = await conexion.query('select cod_usuario, carne, nombre,direccion from usuarios');
            socket.emit('send-users',resultados.rows);
        } catch (err) {
            console.error(err);
        }
    });
});