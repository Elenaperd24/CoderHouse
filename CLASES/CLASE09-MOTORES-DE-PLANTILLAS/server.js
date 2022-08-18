//usaremos el motor de plantilla O TAMPLATE HANDLEBAR

//MARKPUP : EQTIQUETA markup -> html o xml

// PARA USAR HANDLEBAR DEL LADO DEL SERVIDOR LO DEBO IMPORTAR

//DEL LADO DEL CLIENETE EN EL HTML LO USO CON CDN

const express =  require('express')
const {engine} = require('express-handlebars')

const app = express()

app.engine('handlebars',engine())// le paso el motor de plantilla y le paso exphbs para ejecutarlo dentro de engine
// seteo de las 
app.set('view engine', 'handlebars')
app.set('views', './views')

//my endpoints
    //primer ejemplo
/* app.get('/', (req, res)=>{
    res.render('datos', {nombre:'Elena', apellido: 'Perdomo'})
}) */

  //para los el ciclo

const studentsList = [
    {nombre: "ELena"},
    {nombre:"Miguel"}
] 
app.get('/', (req, res)=>{
    res.render('datos', {studentsList, listExists:true})
})



const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})
