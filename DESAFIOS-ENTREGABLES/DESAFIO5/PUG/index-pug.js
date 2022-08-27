const express = require('express')
const Api =  require('../funciones')
const app = express()

const myApi = new Api()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO

app.set('views','./views') //seteo las vistas 
app.set('view engine', 'pug') // seteo el motor
 
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





//server
const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res)=>{
    console.log(`server listening on port ${PORT}`)
})