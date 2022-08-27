const express = require('express')
const Api = require('../funciones')
const { engine } = require('express-handlebars') // requiero el motor

const app = express()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO


app.engine('handlebars', engine())// le paso el motor de plantilla y le paso exphbs para ejecutarlo dentro de engine
// seteo de las 
app.set('view engine', 'handlebars')
app.set('views', './views')

const myApi = new Api() 

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

app.listen(PORT, (req, res) => {
    console.log(`sever listening on ${PORT}`)
})