const socket = io.connect() //configuracion del cliente para conectarse como cliente socket

const input = document.querySelector("input") // el primer elemento con etiqueta 'input'

 input?.addEventListener('input', () => { // envio el mensaje al server emit
    socket.emit('mensajeEnviado', input.value)
})

socket.on('mensajeRecibido', mensajes => {
    document.querySelector("p").innerText = mensajes //recibo 'mensajes' y capturo a <p> y 
                                                    //le paso la data que recibo como innerText
})

/* const socket = io.connect();

const input = document.querySelector('input')

input.addEventListener('input', () => {
socket.emit('mensaje', input.value);
});

socket.on('mensajes', data => {
document.querySelector('p').innerText = data
});

 */