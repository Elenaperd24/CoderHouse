const express = require('express')
const { Router } = express
const Api = require("./funciones")

const app = express()
const routProduct = Router()

const myApi = new Api()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO
app.use(express.static(__dirname + '/public'))


app.use('/api/products', routProduct)


//1) GET '/api/routProduct' -> devuelve todos los routProduct.
routProduct.get('/', (req, res, next) => {
    const products = myApi.getAll()
    res.send(products)
})

//GET '/api/routProduct/:id' -> devuelve un producto según su id.
routProduct.get('/:id', (req, res, next) => {
    const id = req.params.id
    const product = myApi.getById(id)

    if (product == null) {
        res.status(400).send({ error: "producto no encontrado" })
    }
    else {
        res.send(product)
    }
})

//POST '/api/routProduct' -> recibe y agrega un producto, y lo devuelve con su id asignado.
routProduct.post('/', (req, res, next) => {
    const newProduct = req.body    
    const productUpdate = myApi.postData(newProduct)
    res.send(productUpdate)
})

//PUT '/api/routProduct/:id' -> recibe y actualiza un producto según su id.
routProduct.put('/:id', (req, res, next) => {
    const id = req.params.id
    const data = req.body
    myApi.putData(id, data)
    res.status(200).send({message: "datos actualizados"})
})

//DELETE '/api/routProduct/:id' -> elimina un producto según su id.
routProduct.delete('/:id', (req, res, next) => {
    const id = req.params.id
    myApi.deleteData(id)
    res.status(200).send({message: "producto eliminado"})
})


// SERVER
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})