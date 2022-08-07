const { promises: fs } = require('fs');

//*** FUNCIONES PARA MANEJOS DE ARCHIVOS

// funcion para convertir texto en Objeto
const convertString = (contenido) => {
    let textsinComa = contenido.slice(0, -1) // elimino la coma del final para usar Parse
    return JSON.parse(`[${textsinComa}]`)  // lo convierto en objeto
}


// funcion para eliminar contenido de un archivo

const deleteFile = nameFile => fs.unlinkSync(`./${this.nameFile}`, function (err) {
    if (err) throw err
    console.log('su archivo ha sido borrado:(');
})

// AQUI COMIENZA MI CLASE CONTENEDOR 

class Contenedor {
    constructor(nameFile) {
        this.nameFile = nameFile // recibo el nombre del archivo
    }

    async save(product) {

        //leo el contenido del archivo
        const contenido = await this.getAll() // obtengo los datos del archivo

        if (contenido.length !== 0) {
            const cantId = contenido.length // Cantidad de productos
            // asigno nvo ID al producto
            product.id = cantId + 1
        }
        else { product.id = 1 } // id para el primer objeto a guardar

        contenido.push(product) // agrego el nuevo producto al archivo

        try {
            await fs.writeFile(`./${this.nameFile}`, JSON.stringify(contenido, null, 2))

            // devuelvo el id asignado
            return product.id
        }
        catch (err) {
            throw new Error(`save error: ${error}`)
        }
    }
    async getById(id) {

   
        try {
           const contenido = await this.getAll()
        /* console.log("contenido getByid");*/
        /* console.log(contenido);  */
        // aplico filter al text producto 
        let arrayProduct = contenido.filter((item) => item.id == id)
          
                return arrayProduct[0] // Retorno el resultado con el objeto del ID
            }

        catch (error) {
            return null
        }


    }

    async getAll() {
        try {
            const contenido = await fs.readFile(`./${this.nameFile}`, 'utf-8')
            return JSON.parse(contenido)

        }
        catch (error) {
            return []
        }

    }

    async deleteById(id) {
        const contenido = await this.getAll() // leo el contenido

        const objectDelete = this.getById(id) // obtengo el objeto con el id

        let arrayProduct = contenido.filter((item) => item.id !== objectDelete.id)

        // Sobreescribo sin el objeto de id indicado 

        await fs.writeFile(`./${this.nameFile}`, `${JSON.stringify(arrayProduct,null,2)}`)

    }
    deleteAll() {
        deleteFile(this.nameFile)
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

// le guardo 3 objetos a productos.txt
//productos.save(datoA)
//productos.save(datoB)
//productos.save(datoC)
//productos.save(datoD)

// obtengo el objeto con id 4
//const select = productos.getById(3);

//console.log(select);

//obtengo todos los objetos

//console.log(productos.getAll('productos.txt'));

//agrego un nuevo producto
//productos.save(datoD)

// elimino de un array el elemento con id 3
productos.deleteById(2)

// Elimino todo el contenido del archivo
//productos.deleteAll()

