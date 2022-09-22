const express = require('express')
const { Server: HttpServer } = require('http')
const ModelProducts = require('./models/mdoelProducts')
const ModelMessages = require('./models/modelMessages')
const moment = require('moment')
const optionMariaDB = require('./options/mariadb')
const optionSqlite = require('./options/sqlite3')

const { Server: IOserver } = require('socket.io')

const app = express()

const modelProducts = new ModelProducts(optionMariaDB, 'productosdb')
const modelMessages = new ModelMessages(optionSqlite, 'sqlite3')

//Midleword
app.use(express.static('public'))

const httpServer = new HttpServer(app) //inicializo server http
const io = new IOserver(httpServer)

io.on("connection", async socket => {
    console.log("Nuevo cliente conectado")

    if (!modelProducts.getAll()) {
        await modelMessages.createTable()
    }

    if (!modelMessages.getAll()) {
        await modelProducts.createTable()
    }

    const products = await modelProducts.getAll()
    const messages = await modelMessages.getAll()


    socket.emit("products", products) // cuando se conecta el socket le envio todos los productos                                            
    socket.emit('messages', messages) //mensajes

    socket.on('new-product', async product => {  //recibo el productoss del cliente

        await modelProducts.postData(product)

        const products = await modelProducts.getAll()

        io.sockets.emit("products", products) //envio todos los productos a todos los usuarios
    })

    // CHAT CLIENTE SERVIDOR
    socket.on('new-message', async info => {  // recibo el mensaje del cliente    
        let date = moment().format('D/MM/YYYY, h:mm:ss a')

        const infoMessage = {
            email: info.email,
            date: date,
            message: info.message
        }

        await modelMessages.postData(infoMessage)

        const messages = await modelMessages.getAll()
        console.log(messages)
        io.sockets.emit("messages", messages) //envio todos los productos a todos los usuarios
    })

})


//server
const connectedServer = httpServer.listen(8080, () => {
    console.log(`server http con webSocket esta escuchando port 8080`)
})
connectedServer.on("error", error => console.log)
// websockets: se usa para donde la comunicacion de bases en tiempo real, chats, video juegos.

