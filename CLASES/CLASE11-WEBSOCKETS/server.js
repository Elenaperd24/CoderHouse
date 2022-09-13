const express = require('express')
const {Server: HttpServer} = require('http') 
// dentro de la dependencia http hay un objeto llamado Server
//lo renombro para diferenciarlos con server Socket.io por eso Serve: HttpServer

const {Server: IOserver} = require('socket.io')

const app = express() // vamos a usar solo express com framework de back no para servir

//Midleword
app.use(express.static('public'))

const httpServer = new HttpServer(app) //inicializo server http
const io =  new IOserver(httpServer)

const messages = []

io.on("connection", socket => { 
    console.log("Nuevo cliente conectado")
    //socket es el cliente que emite el mensaje
    //entra cuando el usuario se conecto por eso recibo el mensaje aqui (evento)

    socket.emit("new-chat-message", messages) // cuando se conecta el socket le envio lo mensajes
                                            //para evitar que cuando se refresque el front se pierdan los mensajes
    
<<<<<<< HEAD:CLASES/CLASE11-WEBSOCKETS/index.js
    socket.on('mensajeEnviado', mensajes =>{        
        io.sockets.emit("mensajeRecibido", mensajes ) // socket io tiene una base de datos de todos los usuarios conectados
=======
    socket.on('new-message', message =>{ 

        messages.push(message)  

        io.sockets.emit("new-chat-message", messages ) // socket io tiene una base de datos de todos los usuarios conectados

>>>>>>> a756e11c1d303776c367dded8ff182f45c51f04e:CLASES/CLASE11-WEBSOCKETS/server.js
    })
})


//server
const connectedServer = httpServer.listen(8080,()=>{
    console.log(`server http con webSocket esta escuchando port 8080`)
})
connectedServer.on("error", error => console.log)
// websockets: se usa para donde la comunicacion de bases en tiempo real, chats, video juegos. 

