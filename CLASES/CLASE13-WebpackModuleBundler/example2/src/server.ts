import express from "express";

import { Perimetro } from "./perimetros";
import { Superficie } from "./superficie";

const app = express()

const PORT = 3000

const perimetro: Perimetro = new Perimetro()
const superficie: Superficie = new Superficie()

app.get('/perimetro/:figura/:param1/:param2?', (req, res) => {
    const {figura, param1, param2 } = req.params
    let result
    switch (figura) {
        case "cuadrado":
            result = perimetro.cuadrado(Number(param1))
            break;

        case "rectangulo":
            result =  perimetro.rectangulo(Number(param1))
            break;

        case "circulo":
            break;

        default:
            break
    }
    res.send({result}) 
})

app.get('/superficie/figura/param1/param2?', () => {

})


app.listen(PORT, () => { console.log(`Server on port ${PORT}`) })