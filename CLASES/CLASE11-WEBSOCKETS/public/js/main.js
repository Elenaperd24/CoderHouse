const socket = io.connect() //configuracion del cliente para conectarse como cliente socket

const button = document.getElementById("submit") // el primer elemento con etiqueta 'input'

 button?.addEventListener('click', () => { // envio el mensaje al server emit

    const message = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value
    }
    
    socket.emit('new-message', message)
})

/* socket.on('new-chat-message', messages => {
    document.querySelector("p").innerText = messages //recibo 'mensajes' y capturo a <p> y 
                                                    //le paso la data que recibo como innerText
    ``
}) ejemplo sencillo de socket.on() recepcion de mensajes para mostrar en html en <p> */

socket.on("new-chat-message", messages => {
    const html = messages.map(item => {
        return (`<div> <strong>${item.name}<strong/>: <em>${item.message}</em></div>`)
    }).join(" ")

    document.getElementById("chat").innerHTML = html
})
