
const socket = io.connect() //configuracion del cliente para conectarse como cliente socket

function getTemplate(products) {
    // return de la plantilla con los products
    return fetch('views/tabla.hbs')
            .then(response => response.text())
            .then(template => {
                const templateHbs = Handlebars.compile(template)
                const htmlComplete = templateHbs({products})
                return htmlComplete
            })
}

socket.on('products', products => {
    getTemplate(products)
        .then(html => {
            document.getElementById('products').innerHTML= html
        })

}) 

/* const socket = io.connect();

function obtenerPlantillaProductos(products) {
    // return html completo de la plantilla con los productosreturn 
    fetch('plantillas/tabla.hbs')
    .then(response => response.text())
    .then(plantilla => {
        const plantillaHBS = Handlebars.compile(plantilla)
        const htmlCompleto = plantillaHBS({ products })
        return htmlCompleto
    })
}
socket.on('products',
    async productos => {
        const html = await obtenerPlantillaProductos(productos)
        document.getElementById('products').innerHTML = html
    })
 */
