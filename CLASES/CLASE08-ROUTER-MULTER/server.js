/* const express = require('express')
const { Router } = express

const app = express()
const personas = Router()
const mascotas = Router()

app.use('/api', personas)
app.use('/api/', mascotas)   

personas.get('/', (req, res)=> {
    res.send('get ok')
})

mascotas.post('/', (req, res)=> {
    res.send('post ok')
})

 

const PORT  = 3000 
app.listen(PORT, () => {
    console.log(`server on ${PORT}`)
}) */

/**** solo router */
/* const express = require("express")
const { Router } = express


const app = express()
const routerMascota = Router()
const routerPersonas = Router()

//MIDELWORD
app.use(express.json()) // convierto a JSON LA DATA
app.use(express.urlencoded({ extended: true })) //DESCODIFICO


// crearle una ruta con palabra reservada use
//uso la palabra *use* para midleworld

const listaPersonas = []
const listaMascotas = []

const validarDatos = (req, res, next) => {// middleware

    const { nombre, edad } = req.body

    if (!nombre || !edad) {
        res.status(400).send('tus datos no estan completos')
    }
    listaPersonas.push({ nombre, edad })

    next()
}

// PERSONAS

routerPersonas.get('/', (req, res) => {//endpoint
    res.send(listaPersonas)
})

routerPersonas.post('/', validarDatos, (req, res) => {//endpoint
    res.send('persona guardada con exito')
})

//MASCOTAS
routerMascota.get('/mascota', (req, res) => { //endpoint
    res.send('MASCOTA OK')
})

routerMascota.post('/mascota', (req, res) => { //endpoint
    res.send('get ok')
}) */


/**codigo profe MULTER */ 

const express = require('express')
const multer = require('multer')

const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))


// multer config
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads')
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}` )
    }
})

const upload = multer({ storage: storage  })

app.post('/uploadfile', upload.single('file'),  (req, res, next) => {
    const file = req.file

    if(!file){
        // caso de error
        const error = new Error('Por favor carga un archivo valido')
        error.httpStatusCode = 400
        return next(error)
    }

    //caso de exito
    res.send(file)
})

const PORT  = 8080
app.listen(PORT, () => {
    console.log('server on')
})
