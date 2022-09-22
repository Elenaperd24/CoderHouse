
const socket = io.connect() //configuracion del cliente para conectarse como cliente socket

// FUNCION PARA REQUERIR LA PLANILLA HBS
function getTemplate(products) {
    // return de la plantilla con los products
    return fetch('views/tabla.hbs')
        .then(response => response.text())
        .then(template => {
            const templateHbs = Handlebars.compile(template)
            const htmlComplete = templateHbs({ products })
            return htmlComplete
        })
}

// RECIBO LOS PRODUCTOS DESDE SOCKET Y LOS MUESTRO CON HBS CON FUNCION GETTEMPLATE
socket.on('products', products => {
    getTemplate(products)
        .then(html => {
            document.getElementById('products').innerHTML = html
        })

})

// CARGAR PRODUCTOS Y ENVIAR AL SERVER SOCKET
function formProducts() {
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    socket.emit('new-product', product)
}

//CHAT CLIENTE-SERVIDOR

function sendMessage() {
    const info = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    socket.emit('new-message', info)
}




socket.on('messages', messages => {

    const html = messages.map(item => {
        return (`<div> <strong class="email">${item.email}<strong/> [ <em class="date">${item.date}</em>] : <em class="message">${item.message}</em></div>`)
    })

    document.getElementById('chat').innerHTML = html


})


