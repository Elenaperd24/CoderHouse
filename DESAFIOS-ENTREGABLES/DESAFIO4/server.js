const express = require('express')
const { Router } = express
const Api = require("./funciones")

const app = express()
const routProduct = Router()
let products = []

const myApi = new Api()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO
app.use(express.static(__dirname + '/public'))


app.use('/api/products', routProduct)


//1) GET '/api/routProduct' -> devuelve todos los routProduct.
routProduct.get('/', myApi.getAll, (req, res, next) => {
    myApi.getAll(req, res, products, next)
})

//GET '/api/routProduct/:id' -> devuelve un producto según su id.
routProduct.get('/:id', myApi.getById, (req, res, next) => {
    const id = req.params.id
    myApi.getById(req, res, id, products, next)
})

//POST '/api/routProduct' -> recibe y agrega un producto, y lo devuelve con su id asignado.
routProduct.post('/', myApi.postData, (req, res, next) => {
    const product = req.body
    console.log(product)
    myApi.postData(req, res, product, products, next)
})

//PUT '/api/routProduct/:id' -> recibe y actualiza un producto según su id.
routProduct.put('/:id', myApi.putData, (req, res, next) => {
    const id = req.params.id
    const data = req.body    
    myApi.putData(req, res, id, data, products, next)
})

//DELETE '/api/routProduct/:id' -> elimina un producto según su id.
routProduct.delete('/:id', myApi.deleteData, (req, res, next) => {
    const id = req.params.id
    myApi.deleteData(req, res, id, products,next)
})


// SERVER
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})