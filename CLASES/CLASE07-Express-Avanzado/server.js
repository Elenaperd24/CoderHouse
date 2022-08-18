const express = require('express')
const app = express()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({extended:true})) //DESCODIFICO


//*****  ENDSPOINTS TIPO GET ***//
const frase = "Probando Express Avanzado"

app.get('/api/frase', (req, res)=>{
        res.send(frase)
}) 
/* app.get('/api/frase', (req, res)=>{ //ejemplo de recibir query params
    console.log(req.query) // en el explorador lo envio http://localhost:3000/api/frase/?name:elena
    //?name:elena asi se envia los parametros
    res.send(req.query)
}) */

app.get('/api/letra/:num',(req, res)=>{
    let position = req.params.num
    res.send(`la letra en la posicion es: ${frase.charAt(position+1)}`)
})

app.get('/api/palabras/:num', (req,res)=>{
    let position = req.params.num
    
    res.send(frase.split(' ')[position])

    // esta condicion nunca se va a cumplir porque el path no exitiria y 
    //me diria 404 como error del cliente ruta no correcta
/*     if(!num) {
        res.sendStatus(400).send('debes enviar un numero')
    }  */

})



//***ENDSPOINTS TIPO POST *****//

    // crear los endpoints necesario para realizar una lista de usuarios
    //crear un usuario
    //listar todos los usuarios
    //traer un solo usuario id
    //modificar el usuario con un id

//crear usuario
let listaUsuarios = []

app.post('/usuario', (req, res)=>{
    const data = req.body

    listaUsuarios.push(data)

    if(!data){
        res.sendStatus(400)
    }

    res.send(listaUsuarios)
})

//listar usuario

app.get('/usuario',(req, res)=>{
    res.send(listaUsuarios)
})

//obtener con id

app.get('/usuario/:id',()=>{

})

//eliminar todos los usuarios
app.delete('/usuario', (req, res)=>{
    listaUsuarios = []
    res.send(listaUsuarios)
})

//eliminar el usuario con un id
app.delete('/usuario/:id', ()=>{

})




const PORT = 3000 

app.listen(PORT, ()=>{
    console.log(`listening server on ${PORT}`)
})

