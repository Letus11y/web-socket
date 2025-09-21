const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 4001;

const router = require('./router');

const app = express();

const server = http .createServer(app);

const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

var now = Date();

io.on('connection', (socket) => {
    
    console.log("Nueva conexion a las: " + now);

    socket.on('insertar', (usuario)=>{
        console.log("Se ejecuto a las: " + now);
        console.log(usuario);
        socket.broadcast.emit('insert', usuario);
    });

    socket.on('eliminar', (id)=>{
        console.log("Se ejecuto a las: " + now);
        console.log(id);
        socket.broadcast.emit('delete', id);
    });

    socket.on('disconnect', ()=>{
        console.log("Se desconacto a las: " + now);
    });


})

app.use(router);

server.listen(PORT, () => console.log("El socket fue iniciado en el puerto " + PORT) );