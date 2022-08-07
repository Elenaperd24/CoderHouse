const { promises: fs } = require('fs');

// AQUI COMIENZA MI CLASE CONTENEDOR 

class Contenedor {
    constructor(nameFile) {
        this.nameFile = nameFile // recibo el nombre del archivo
        //creo el archivo
    }

    async save(product) {

        const contenido = await this.getAll() // leo el contenido
        let newId

        if (contenido.length == 0) {
            newId = 1 // id si no hay elememtos en el archivo
        }
        else {
            newId = contenido.length + 1 // me aseguro de no duplicar el id
        }

        contenido.push({ ...product, id: newId }) // agrego al archivo el producto

        try {
            // sobre escribo el archivo
            await fs.writeFile(`./${this.nameFile}`, JSON.stringify(contenido, null, 2))
            return newId

        }
        catch (err) {
            throw new Error('save error', err)
        }
    }

    async getById(id) {

        const contenido = await this.getAll() // leo el contenido

        // filtro el objeto con id selec
        let newContenido = contenido.filter(item => item.id == id) 

        if (newContenido[0] !== null) {
            return newContenido[0] // Retorno el resultado con el objeto del ID
        }
        else {
            return null;
        }

    }

    async getAll() {
        try {
            // leo el contenido del archivo
            const contenido = await fs.readFile(`./${this.nameFile}`, 'utf-8')
            return JSON.parse(contenido) // retorno un array con todos los productos
        }
        catch (err) {
            return []
        }

    }

    async deleteById(id) {

        const contenido = await this.getAll()

        const objectDelete = await this.getById(id)

        let newContenido = contenido.filter(item => item.id !== objectDelete.id)

        try {
            if (newContenido !== null) {
                await fs.writeFile(`./${this.nameFile}`, JSON.stringify(newContenido, null, 2))
            }

        } catch (error) {
            throw new Error('deleteById error', err)
        }

    }

    deleteAll() {
        fs.unlink(`./${this.nameFile}`)
    }
}

// datos a recibir de prueba 
const datoA = {
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',

}

const datoB = {
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}

const datoC = {
    title: 'Globo Terraqueo',
    price: 264.4,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}
const datoD = {
    title: 'Pelota Rosa',
    price: 264.4,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',

}
// creo la constante para almacenar en productos.txt 
const productos = new Contenedor('productos.txt')

// Guardo datos
productos.save(datoD)

// Obtengo byId 
//productos.getById(2)

//obtengo todos los datos
//productos.getAll()

// elimino byId ejemplo id=2
//productos.deleteById(2)

// elimino el archivo
//productos.deleteAll()






