const express = require('express')
const {Server: HttpServer} = require('http')
const Api = require('./funciones')
const moment = require('moment')

const {Server: IOserver} = require('socket.io')

const app = express() 

const myApi = new Api()

//Midleword
app.use(express.static('public'))

const httpServer = new HttpServer(app) //inicializo server http
const io =  new IOserver(httpServer)

const messages = []

io.on("connection", socket => { 
    console.log("Nuevo cliente conectado")
    
    //socket es el cliente que emite el mensaje
    //entra cuando el usuario se conecto por eso recibo el mensaje aqui (evento)
    const products = myApi.getAll()
    socket.emit("products", products) // cuando se conecta el socket le envio todos los productos                                            
    socket.emit('messages', messages) //mensajes
    
   socket.on('new-product', product =>{  //recibo el productoss del cliente
        myApi.postData(product)

        const products = myApi.getAll()

        io.sockets.emit("products", products) //envio todos los productos a todos los usuarios
    }) 

    // CHAT CLIENTE SERVIDOR
    socket.on('new-message', info =>{  // recibo el mensaje del cliente    
        let date = moment().format('D/MM/YYYY, h:mm:ss a')
        const infoMessage = {
            email: info.email,
            date: date,
            message: info.message
        }
         messages.push(infoMessage)

        io.sockets.emit("messages", messages) //envio todos los productos a todos los usuarios
    }) 

})


//server
const connectedServer = httpServer.listen(8080,()=>{
    console.log(`server http con webSocket esta escuchando port 8080`)
})
connectedServer.on("error", error => console.log)
// websockets: se usa para donde la comunicacion de bases en tiempo real, chats, video juegos. 

