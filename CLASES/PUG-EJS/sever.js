const express = require('express')

const app = express()

app.set('views','./views') //seteo las vistas 
app.set('view engine', 'pug') // seteo el motor

app.get('/', (req, res)=> {
    res.render('hello.pug', {message:"Hello People"}) //nombre del archivo y envio del archivo
})

app.get('/datos', (req, res)=> {
    //recibir parametros como query params ?value=15&min=10&max=20
    const {min, max, value } = req.query
    res.render('meter.pug', {min:min, max:max, value:value}) //nombre del archivo y envio del archivo
})



// server
const PORT = process.env.PORT || 3000

app.listen(PORT, (req, res)=>{
    console.log(`server listening on ${PORT}`) 
}) 