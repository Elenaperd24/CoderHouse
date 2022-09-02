const express = require('express')
const {Server: HttpServer} = require('http')
const Api = require('./funciones')

// dentro de la dependencia http hay un objeto llamado Server
//lo renombro para diferenciarlos con server Socket.io por eso Serve: HttpServer

const {Server: IOserver} = require('socket.io')

const app = express() // vamos a usar solo express com framework de back no para servir

const myApi = new Api()

//Midleword
app.use(express.static('public'))

const httpServer = new HttpServer(app) //inicializo server http
const io =  new IOserver(httpServer)

const products = [{title:"Camisa" , price:500 , thumbnail: "http://d3ugyf2ht6aenh.cloudfront.net/stores/103/133/products/camisa-silver-ridge-mu-l21-523936152c51ab6fa515131786953784-640-0.jpg"}]

app.post('/products', (req, res) => {
    const product = req.body
    myApi.postData(product)
    res.render('form')
})

app.get('/products', (req, res) => {
    const products = myApi.getAll()
    res.render('products', {products}) 
})



io.on("connection", socket => { 
    console.log("Nuevo cliente conectado")
    //socket es el cliente que emite el mensaje
    //entra cuando el usuario se conecto por eso recibo el mensaje aqui (evento)

    socket.emit("products", products) // cuando se conecta el socket le envio lo mensajes
                                            //para evitar que cuando se refresque el front se pierdan los mensajes
    
   /*  socket.on('new-message', message =>{ 

        messages.push(message)  

        io.sockets.emit("new-chat-message", messages ) // socket io tiene una base de datos de todos los usuarios conectados

    }) */

})


//server
const connectedServer = httpServer.listen(8080,()=>{
    console.log(`server http con webSocket esta escuchando port 8080`)
})
connectedServer.on("error", error => console.log)
// websockets: se usa para donde la comunicacion de bases en tiempo real, chats, video juegos. 

