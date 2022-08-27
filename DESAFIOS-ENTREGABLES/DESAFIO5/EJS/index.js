const express = require('express')
const Api = require('../funciones')

const app = express()

const myApi = new Api()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO

app.set('view engine', 'ejs') 

//ENDPOINTS 
app.get('/', (req, res) => {
    res.render("form")
})

app.post('/products', (req, res) => { 
    const product = req.body
    myApi.postData(product)
    res.render('form')
})

app.get('/products', (req, res) => {   
    const products = myApi.getAll()
    res.render('products', {products}) 
})

//SERVER
const PORT = process.env.PORT || 3000
app.listen(PORT, (res, req)=>{
    console.log(`server listening on port ${PORT}`)
})
