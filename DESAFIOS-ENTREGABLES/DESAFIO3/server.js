const express = require('express'); // requiero el modulo
const Contenedor = require('./contenedor.js')
const app = express() // llamo a la funcion

const productos = new Contenedor('productos.txt')



const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`servidor escuhando port:  ${server.address().port}`);
})
// detectar errores
server.on('error', error => console.log(`error en servidor ${error}`))

// ruta principal 
app.get('/', (req, res) => {
    res.send(`<h1 style="color: pink ;display: flex;justify-content:center;">Welcome to Elena's Server </h1>`)
})


// mostrando todos los productos con metodo getAll clase Contenedor
app.get('/productos', async (req, res) => {
   
    const datos = await productos.getAll()
    //respuesta al servidor despues que obtuve todos los datos
    res.send(`<h1>Productos</h1>
    ${datos.map(item=>`<img style="width:8%" src="${item.thumbnail}"></img>
    <h3>${item.title} ${item.price} $</h3>`)}`)

})


// seleccionar producto random con metodo getById clase Contenedor
app.get('/productosRandom', async (req, res) => {

    // saber cuantos datos hay para garantizar que siempre se mantenga en este rango de numeros
    const datos = await productos.getAll()

    const idRandom = await datos.length + 1

    // obtener id aleatorios dentro de los datos existentes para usar el getById()    
    const id = Math.floor(Math.random() * (idRandom - 1) + 1)

    const productSelec = await productos.getById(id) // obtengo el objeto id random

    res.send(`<div style="display: flex; flex-direction: column;justify-content:center; align-items: center">
                <h1 >${productSelec.title}</h1>
                <img style='width: 20%' src=${productSelec.thumbnail}></img>
                <h1>price: ${productSelec.price}$</h1>

            <div>`)
})

