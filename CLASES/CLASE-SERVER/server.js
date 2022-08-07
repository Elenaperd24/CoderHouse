const http = require('http');

// Creamos nuestro server

const message = () => {
    const hora = new Date().getHours()
}


const server = http.createServer((req, res) => {
    res.end('Hola Mundo');
})

const connectedServer = server.listen(8095, () => {
    console.log("Servidor escuchando en: " + connectedServer.address().port);
})

//APPI REST QUE NOS PERMITE ACCEDER A FUNCIONES CON VERBOS SEMANTICOS GET DELETE POST